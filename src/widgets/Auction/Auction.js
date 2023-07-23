import { useEffect, useState } from "react"
import { getHomeAuction, getRunningQueriesThunk, useGetHomeAuctionQuery, useGetHomeCategoriesQuery } from "@/redux/apis/homeApi"
import { wrapper } from "@/redux/store"
import Categories from "../Categories/Categories";
import dynamic from 'next/dynamic';

const PageBuilder = dynamic(() => import("@/components/PageBuilder/PageBuilder"));
const Auction = () => {
    const [auction, setAuction] = useState([]);
    const homeAuctionQuery = useGetHomeAuctionQuery();
    const categoriesQuery = useGetHomeCategoriesQuery();

    useEffect(() => {
        setAuction(homeAuctionQuery.data)
    }, [homeAuctionQuery]);
    const listProps = {
        slideMaxWidth: 300,
        spaceBetween: 70,
        slidesPerView: "auto",
        navigation: true
    }
    return (
        auction &&
        <>
            <Categories title={'Categories'} categoriesData={categoriesQuery?.data || []} />
            <PageBuilder type={'auction'} structure={auction} listProps={listProps} categoriesData={categoriesQuery?.data || []}/>
        </>
    )
}


export default Auction



export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        store.dispatch(getHomeAuction.initiate());
        await Promise.all(store.dispatch(getRunningQueriesThunk()));
        return {
            props: {},
        };
    }
);
