import PageBuilder from "@/components/PageBuilder/PageBuilder";
import ScrollTop from "@/components/ScrollTop/ScrollTop";
import { Fab, Typography } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from "@emotion/react";
import { wrapper } from "@/redux/store";
import { getCategoryAuctionsById, getRunningQueriesThunk, useGetCategoryAuctionsByIdQuery } from "@/redux/apis/categoryApi";
import { useGetHomeCategoriesQuery } from "@/redux/apis/homeApi";
import Categories from "@/widgets/Categories/Categories";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGetVehicleMakeQuery } from "@/redux/apis/vehicleApi";
import FilterTagSlider from "@/widgets/SearchBox/FilterTagSlider/FilterTagSlider";
import { useDispatch } from "react-redux";
import { onAddFilter } from "@/redux/slices/advanceSearch.slice";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded"; 

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({ req, res }) => {
        store.dispatch(getCategoryAuctionsById.initiate());
        await Promise.all(store.dispatch(getRunningQueriesThunk()));
        return {
            props: {},
        };
    }
);

const Category = () => {
    const router = useRouter();
    const { slug } = router.query;
    const theme = useTheme();
    const dispatch = useDispatch();
    const [categoriesData, setCategoriesData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({});
    const categoryData = useGetCategoryAuctionsByIdQuery(slug);
    const categoriesQuery = useGetHomeCategoriesQuery();
    const carMakes = useGetVehicleMakeQuery();
    const listProps = {
        slideMaxWidth: 300,
        spaceBetween: 70,
        slidesPerView: "auto",
        navigation: true
    }
    useEffect(() => {
        const filteredCategories = categoriesQuery?.data?.filter(category => !(Number(category.id) === Number(slug)))
        setCategoriesData(filteredCategories);
    }, [slug]);

    useEffect(() => {
        const selectedCategory = categoriesQuery?.data?.find(category => Number(category.id) === Number(slug))
        setSelectedCategory(selectedCategory);
    }, [slug])

    const onMakeFilter = ({ make }) => {
        dispatch(onAddFilter({ saleType: 'sale', auctionVehicleTypeId: Number(slug), make: make }));
        router.push('/search');
    }
    return (
    <>
       <ArrowBackIosRoundedIcon
        onClick={() => router.back()}
        sx={{
          cursor: "pointer",
          marginLeft: "2%",
          marginTop: "2%",
          marginBottom: "1%",
          fontSize: 18,
        }}
      />
        <div>
            <Typography padding={2} fontSize={30} fontWeight={1000}>
                {selectedCategory?.name}
            </Typography>
            {
                slug == '1' &&
                <FilterTagSlider
                    title="make"
                    onSelect={onMakeFilter}
                    data={carMakes?.data?.data?.map((ele) => ({
                        ...ele,
                        catName: ele?.name,
                    }))}
                    valueKey="id"
                />
            }
            <PageBuilder
                type='sale'
                listProps={listProps}
                structure={categoryData?.data || []}
                isCategory={true}
            />
            <Categories title={'You might also like'} categoriesData={categoriesData ?? []} />
            <ScrollTop>
                <Fab style={{ background: theme.palette.primary.main }} size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </div>
        </>
    )
}

export default Category

