
import PageBuilder from "@/components/PageBuilder/PageBuilder"
import { getHomeSale, getRunningQueriesThunk, useGetHomeCategoriesQuery, useGetHomeSaleQuery } from "@/redux/apis/homeApi"
import { useEffect, useState } from "react"
import Categories from "../Categories/Categories"
import { wrapper } from "@/redux/store"

const Sales = ({ categoriesData }) => {
    const [saleData, setSaleData] = useState([]);
    const homeSaleQuery = useGetHomeSaleQuery();
    const categoriesQuery = useGetHomeCategoriesQuery();

    useEffect(() => {
        setSaleData(homeSaleQuery.data)
    }, [homeSaleQuery]);
    const listProps = {
        slideMaxWidth: 300,
        spaceBetween: 25,
        slidesPerView: "auto",
        navigation: true
    }
    return (
        saleData &&

        <>
            <Categories pageView={false} title={'Categories'} categoriesData={categoriesQuery?.data || []}></Categories>
            <PageBuilder type={'sale'} structure={saleData} listProps={listProps} />
        </>


    )
}


export default Sales


export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        store.dispatch(getHomeSale.initiate());
        await Promise.all(store.dispatch(getRunningQueriesThunk()));
        return {
            props: {},
        };
    }
);
