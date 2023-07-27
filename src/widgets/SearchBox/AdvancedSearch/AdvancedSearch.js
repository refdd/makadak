import {
  Box,
  Button,
  Drawer,
  TextField,
  Typography,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import RadioFilters from "../RadioFilters/RadioFilters";
import FilterLabelWithChoices from "../FilterLabelWithChoices/FilterLabelWithChoices";
import DrawerFooter from "./DrawerFooter/DrawerFooter";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";

import PriceFilter from "../PriceFilter/PriceFilter";
import DrawerHeader from "./DrawerHeader/DrawerHeader";
import FilterTagSlider from "../FilterTagSlider/FilterTagSlider";
import { useEffect, useState } from "react";
import { useGetHomeCategoriesQuery } from "@/redux/apis/homeApi";
import {
  useGetModelsByMakeIdMutation,
  useGetTrimsbyModelIdMutation,
  useGetVehicleMakeQuery,
} from "@/redux/apis/vehicleApi";
import { useDispatch, useSelector } from "react-redux";
import {
  onAddFilter,
  resetSearch,
  setData,
  setVehicleMaker,
  setVehicleModal,
} from "@/redux/slices/advanceSearch.slice";
import { useGetCountriesQuery } from "@/redux/apis/locations/countries.api";
import { useGetRegionByCountryQuery } from "@/redux/apis/locations/regions.api";
import { useGetCityByRegionQuery } from "@/redux/apis/locations/cities.api";

import {
  useGetAuctionFilterMutation,
  useGetAuctionSearchByLotMutation,
} from "@/redux/apis/auctionSearchApi";
import { checkIfNumber } from "@/lib/helpers";
import { useRouter } from "next/router";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded"; 

export default function AdvancedSearch({ onSearchInputChange, searchValue }) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    right: false,
    advSearchInput: "",
  });
   const router = useRouter();

  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');

  const getCountriesQuery = useGetCountriesQuery();
  const getRegionsQuery = useGetRegionByCountryQuery({ countryId: country });
  const getCitiesQuery = useGetCityByRegionQuery({ regionId: region });

  useEffect(() => {
    setCountries(getCountriesQuery?.data?.data);
  }, [getCountriesQuery]);

  useEffect(() => {
    setRegions(getRegionsQuery?.data?.data);
    setCities([]);
  }, [country, getRegionsQuery]);

  useEffect(() => {
    setCities(getCitiesQuery?.data?.data);
  }, [region, getCitiesQuery]);

  const categories = useGetHomeCategoriesQuery();
  const { filter, vehicleMake, vehicleModal } = useSelector(
    (state) => state.advanceSearch
  );

  const { bodyTypes, colors, mileages, years } = useSelector(
    (state) => state.auth.configs
  );
  const [filterAuction, filterRes] = useGetAuctionFilterMutation();
  const [getModelsByMakeId, vehicleModalResponse] =
    useGetModelsByMakeIdMutation();
  const getVehicleMaker = useGetVehicleMakeQuery({
    onlyActive: 1,
    sortBy: "mostPopular",
  });

  const [searchByLot, searchByLotRes] = useGetAuctionSearchByLotMutation();

  useEffect(() => {
    onSubmit();
  }, []);

  useEffect(() => {
    if (filterRes?.isSuccess) {
      dispatch(setData(filterRes?.data));
    }
  }, [filterRes]);

  useEffect(() => {
    if (searchByLotRes?.isSuccess) {
      dispatch(setData({ data: [searchByLotRes?.data] }));
    }
  }, [filterRes, searchByLotRes]);

  useEffect(() => {
    if (filter?.make) {
      getModelsByMakeId({
        id: filter?.make,
      });
    }
  }, [filter?.make]);

  useEffect(() => {
    if (getVehicleMaker?.isSuccess) {
      dispatch(setVehicleMaker(getVehicleMaker?.data?.data));
    }
  }, [getVehicleMaker]);

  useEffect(() => {
    if (vehicleModalResponse?.isSuccess) {
      dispatch(setVehicleModal(vehicleModalResponse?.data?.vehicleModels));
    }
  }, [vehicleModalResponse]);

  useEffect(() => {
    return () => {
      dispatch(resetSearch());
    };
  }, []);

  const [errors, setErrors] = useState({});
  const formValid = (values) => {
    const filteredData = Object.fromEntries(
      Object.entries(values).filter(([_, v]) => v)
    );
    const validationObj = {
      lot: "number",
      priceFrom: "number",
      priceTo: "number",
    };
    let validated = true;
    Object.keys(validationObj).forEach((key, i) => {
      if (validationObj[key] === "number" && filteredData[key]) {
        if (!checkIfNumber(filteredData[key])) {
          setErrors((prevState) => ({
            ...prevState,
            [key]: "Value must be a number",
          }));
          validated = validated && false;
        } else {
          setErrors((prevState) => ({ ...prevState, [key]: "" }));
          validated = validated && true;
        }
      } else {
        setErrors((prevState) => ({ ...prevState, [key]: "" }));
        validated = validated && true;
      }
    });
    return validated;
  };

  const onSubmit = () => {
    if (!formValid(filter)) return;
    if (!!filter.lot) {
      searchByLot({
        id: filter.lot,
      })
        .then((res) => {
          if (res.error) dispatch(setData([]));
        })
        .catch((err) => {
          console.log("!@#err", err);
          dispatch(setData([]));
        });
    } else {
      const filteredData = Object.fromEntries(
        Object.entries(filter).filter(([_, v]) => v)
      );
      const { country, regionState, ...finalFilteredData } = filteredData
      filterAuction({ ...finalFilteredData })
        .unwrap()
        .then((res) => {
          if (res.error) dispatch(setData([]));
        })
        .catch((err) => {
          console.log("!@#err", err);
          dispatch(setData([]));
        });
    }
    setState({ right: false });
  };

  const onFilter = (value) => {
    console.log({value})
    dispatch(onAddFilter(value));
  };

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, right: !state.right });
  };

  const auctionData = [
    { id: "all", catName: "All" },
    { id: "sale", catName: "Sale" },
    { id: "auction", catName: "Auction" },
  ];

  return (
    <>
       <ArrowBackIosRoundedIcon
        onClick={() => router.back()}
        sx={{
          cursor: "pointer",
          marginLeft: "2%",
          marginTop: "2%",
          marginBottom:'1%',
          fontSize:18
        }}
      />
      <Button onClick={toggleDrawer("right", true)}>
        <Typography
          variant="body1"
          component="span"
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap",
            "@media(max-width: 776px)": {
              fontSize: 12,
            },
          }}
          fontWeight={700}
          whiteSpace={"nowrap"}
        >
          Advanced Search 
        </Typography>
      </Button>
      <div>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          PaperProps={{
            style: {
              width: 400,
              background: "#000",
              maxWidth: "100%",
            },
          }}
        >
          <Box
            role="presentation"
            sx={{
              width: "100%",
              height: "88%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              gap: "15px",
            }}
            padding={"5%"}
          >
            <DrawerHeader onClose={toggleDrawer("right", false)} />
            <TextField
              onChange={(e) => {
                onFilter({ lot: e.target.value });
              }}
              label={"#Lot"}
              variant="outlined"
              autoComplete={false}
              value={filter.lot}
              error={errors.lot}
              helperText={errors.lot}
            />
            <RadioFilters title={"Sale Type"}>
              <FilterTagSlider
                data={auctionData}
                onSelect={onFilter}
                title="saleType"
                type={"auction_type"}
                valueKey="id"
                val={filter.saleType}
              />
            </RadioFilters>{" "}
            <RadioFilters title={"Category"} type={"auction_type"}>
              <FilterTagSlider
                title="auctionVehicleTypeId"
                onSelect={onFilter}
                data={categories?.data?.map((ele) => ({
                  ...ele,
                  catName: ele?.name,
                }))}
                valueKey="id"
                val={Number(filter.auctionVehicleTypeId)}
              />
            </RadioFilters>
            <RadioFilters title={"Type"}>
              <FilterTagSlider
                data={[
                  { catName: "Ending soon", id: "ending-soon" },

                  { catName: "Most Popular", id: "most-popular" },
                  { catName: "Latest", id: "latest" },

                  { catName: "New", id: "new" },
                  { catName: "Active", id: "active" },
                  { catName: "Ended", id: "ended" },
                  { catName: "Buy-now Request", id: "buy-now-request" },
                ]}
                title="type"
                onSelect={onFilter}
                valueKey="id"
                type={"auction_type"}
                val={filter.type}
              />
            </RadioFilters>{" "}
            <>
              <Box
                sx={{ display: "flex", gap: "3px", flexDirection: "column" }}
              >
                {filter?.auctionVehicleTypeId == 1 && (
                  <>
                    <FilterLabelWithChoices
                      selectedValue={filter?.make}
                      title={"Make"}
                      value={
                        filter?.make && filter?.make !== "all"
                          ? vehicleMake.filter(
                              (ele) => ele?.id === filter?.make
                            )[0]?.name
                          : "All"
                      }
                      onSelect={onFilter}
                      data={vehicleMake}
                    />
                    <FilterLabelWithChoices
                      title={"Model"}
                      disabled={!filter?.make}
                      value={
                        filter?.model && filter?.model !== "all"
                          ? vehicleModal?.filter(
                              (ele) => ele?.id === filter?.model
                            )[0]?.name
                          : "All"
                      }
                      onSelect={onFilter}
                      data={vehicleModal}
                      selectedValue={filter?.model}
                    />
                  </>
                )}
                <FilterLabelWithChoices
                  title={"Year From"}
                  value={
                    filter?.yearFrom && filter?.yearFrom !== "all"
                      ? years?.filter((ele) => ele?.id === filter?.yearFrom)[0]
                          ?.name
                      : "All"
                  }
                  onSelect={onFilter}
                  data={years}
                  selectedValue={filter?.yearFrom}
                  filterKey={"yearFrom"}
                />
                {filter?.auctionVehicleTypeId == 1 && (
                  <>
                    <FilterLabelWithChoices
                      title={"Year To"}
                      value={
                        filter?.yearTo && filter?.yearTo !== "all"
                          ? years?.filter(
                              (ele) => ele?.id === filter?.yearTo
                            )[0]?.name
                          : "All"
                      }
                      onSelect={onFilter}
                      data={years}
                      selectedValue={filter?.yearTo}
                      filterKey={"yearTo"}
                    />
                    <FilterLabelWithChoices
                      title={"Car Type"}
                      value={
                        filter?.bodyType && filter?.bodyType !== "all"
                          ? bodyTypes?.filter(
                              (ele) => ele?.id === filter?.bodyType
                            )[0]?.name
                          : "All"
                      }
                      onSelect={onFilter}
                      data={bodyTypes}
                      selectedValue={filter?.bodyType}
                      filterKey={"bodyType"}
                    />
                    <FilterLabelWithChoices
                      title={"Kilometers"}
                      value={
                        filter?.mileage && filter?.mileage !== "all"
                          ? mileages?.filter(
                              (ele) => ele?.id === filter?.mileage
                            )[0]?.name
                          : "All"
                      }
                      onSelect={onFilter}
                      data={mileages}
                      selectedValue={filter?.mileage}
                      filterKey={"mileage"}
                    />
                    <FilterLabelWithChoices
                      title={"Color"}
                      value={
                        filter?.color && filter?.color !== "all"
                          ? colors?.filter(
                              (ele) => ele?.id === filter?.color
                            )[0]?.name
                          : "All"
                      }
                      onSelect={onFilter}
                      data={colors}
                      selectedValue={filter?.color}
                      filterKey={"color"}
                    />
                  </>
                )}
              </Box>
              <TextField
                defaultValue={filter.priceFrom}
                label={"Price from"}
                onChange={(e) =>
                  onFilter({
                    priceFrom: e.target.value,
                  })
                }
                error={errors.priceFrom}
                helperText={errors.priceFrom}
              />
              <TextField
                defaultValue={filter.priceTo}
                label={"Price to"}
                onChange={(e) =>
                  onFilter({
                    priceTo: e.target.value,
                  })
                }
                error={errors.priceTo}
                helperText={errors.priceTo}
              />
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <InputLabel sx={{ color: "white" }}>Country</InputLabel>
                <Select
                  sx={{ width: "100%" }}
                  name="country"
                  label="Country"
                  variant="outlined"
                  onChange={(e) => {
                    onFilter({ country : e.target.value })
                    setCountry(e.target.value);
                  }}
                  defaultValue={filter?.country ?? ''}
                >
                  {countries &&
                    countries.map((country) => (
                      <MenuItem key={country.id} value={country.id}>
                        {country.name}
                      </MenuItem>
                    ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <InputLabel sx={{ color: "white" }}>Region</InputLabel>
                <Select
                  sx={{ width: "100%" }}
                  name="regionState"
                  label="Region / State"
                  variant="outlined"
                  disabled={!regions?.length}
                  onChange={(e) => {
                    onFilter({ regionState : e.target.value })
                    setRegion(e.target.value);
                  }}
                  defaultValue={filter?.regionState ?? ''}
                >
                  {regions &&
                    regions.map((region) => (
                      <MenuItem key={region.id} value={region.id}>
                        {region.name}
                      </MenuItem>
                    ))}
                </Select>
              </Grid>
            </>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <InputLabel sx={{ color: "white" }}>City</InputLabel>
              <Select
                sx={{ width: "100%" }}
                name="sellerCityId"
                label="City"
                variant="outlined"
                disabled={!cities?.length}
                onChange={(e) => {
                  onFilter({ sellerCityId : e.target.value })
                  setCity(e.target.value);
                }}
                defaultValue={filter?.sellerCityId ?? ''}
              >
                {cities &&
                  cities.map((city) => (
                    <MenuItem key={city.id} value={city.id}>
                      {city.name}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Box>
          <DrawerFooter
            onClose={toggleDrawer("right", true)}
            showResults={state.advSearchInput !== ""}
            onSubmit={onSubmit}
          />
        </Drawer>
      </div>
    </>
  );
}
