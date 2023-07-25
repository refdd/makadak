import { Box, Grid, Pagination } from "@mui/material";
import Results from "./Results/Results";
import SortModal from "./SortModal/SortModal";
import SortHeader from "./SortHeader/SortHeader";
import { useGetAuctionFilterMutation } from "@/redux/apis/auctionSearchApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAddFilter, setData } from "@/redux/slices/advanceSearch.slice";
export default function SearchResults({
  searchValue,
  isSortModalOpen,
  toggleSortModal,
  data,
}) {
  const dispatch = useDispatch();
  const [filterAuction, filterRes] = useGetAuctionFilterMutation();
  const { filter } = useSelector((state) => state.advanceSearch);
  const handleChange = (button, number) => {
    if (filter?.auctionVehicleTypeId === 1 || !filter?.auctionVehicleTypeId) {
      const filteredData = Object.fromEntries(
        Object.entries(filter).filter(([_, v]) => v)
      );
      filterAuction({ ...filteredData, page: number });
    } else {
      searchByLot({
        id: lot,
      });
    }
  };

  useEffect(() => {
    if (filterRes?.isSuccess) {
      dispatch(setData(filterRes?.data));
    }
  }, [filterRes]);

  const onFilter = (value, applyFilter) => {
    dispatch(onAddFilter(value));
    if (applyFilter) onApplyFilter();
  };
  const onApplyFilter = () => {
    const filteredData = Object.fromEntries(
      Object.entries(filter).filter(([_, v]) => v)
    );
    filterAuction({ ...filteredData });
  };
  return (
    <Grid
      container
      flexDirection={"column"}
      width={"100%"}
      padding={"1% 1% 0 1%"}
      sx={{
        "@media(max-width: 776px)": {
          padding: "1% 10px 0 10px",
        },
      }}
    >
      {searchValue != "" && (
        <>
          <Box marginBottom={2}>
            <SortHeader
              resultCount={data?.meta?.total || data?.data?.length}
              openSortModal={toggleSortModal}
            />
          </Box>
          <Results
            data={data?.data?.map((ele) => ({
              ...ele,

              description: ele?.vehicleYear,
              price: {
                ...ele?.vehiclePrice,
                code: ele?.vehiclePrice?.currency?.code,
              },
              views: ele?.analytics?.clicks,
              note: ele?.mileage + "KM",
              time: +ele?.timeRemaining?.secondsLeft,
              heading: ele?.title,
              img: ele?.mediaPhotos?.length && ele?.mediaPhotos[0]?.url,
              flag: ele?.country?.countryCode2.toLowerCase(),
            }))}
          />
        </>
      )}
      <SortModal
        onFilter={onFilter}
        open={isSortModalOpen}
        onClose={() => {
          toggleSortModal();
        }}
        toggleSortModal={toggleSortModal}
        onApplyFilter={onApplyFilter}
      />
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        mt={4}
      >
        <Pagination
          count={data?.meta?.last_page}
          color="primary"
          onChange={handleChange}
        />
      </Box>
    </Grid>
  );
}
