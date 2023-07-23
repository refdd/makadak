import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {
  notificationsSlice,
  accountSlice,
  homeSlice,
  partnersSlice,
  c2cSlice,
  userSlice,
  dataSlice,
  authSlice,
  advanceSearchSlice,
} from "./slices";
import { favoritesApi } from "./apis/favouriteApi";
import { auctioSalesBuyerApis } from "./apis/auction-salesApi/buyerApi";
import { auctionSaleBuyNowApi } from "./apis/auction-salesApi/buynowApi";
import { auctioSalesSellerApis } from "./apis/auction-salesApi/sellerApi";
import { businessesApi } from "./apis/businessesApi";
import { walletApi } from "./apis/walletApi";
import { buyNowApi } from "./apis/buyNowApi";
import { myActivityApi } from "./apis/account/myActivity.api";
import { notificationApi } from "./apis/notificationApi";
import { profileApi } from "./apis/profile.api";
import { authApi } from './apis/authApi';
import { homeApi } from './apis/homeApi';
import { categoryApi } from './apis/categoryApi';
import { countriesApi } from './apis/locations/countries.api';
import { regionsApi } from './apis/locations/regions.api';
import { cityByRegionApi } from './apis/locations/cities.api';
import { auctionApi } from './apis/auctionApi';
import { auctionSearch } from './apis/auctionSearchApi';
import { vehicleApi } from './apis/vehicleApi';
import { chatApi } from './apis/chat/chatApi';
import { inspectionReportApi } from './apis/inspection-report/inspectionReportStore.api';
import { watchlistsApi } from './apis/account/myWatchList.api';
import { bidApi } from './apis/bidApi';
import { inspectionReportListApi } from "./apis/inspection-report/inspectionReportList.api";


const reducers = combineReducers({
  [notificationsSlice.name]: notificationsSlice.reducer,
  [accountSlice.name]: accountSlice.reducer,
  // [homeSlice.name]: homeSlice.reducer,
  [homeApi.reducerPath]: homeApi.reducer,
  [partnersSlice.name]: partnersSlice.reducer,
  [c2cSlice.name]: c2cSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [dataSlice.name]: dataSlice.reducer,
  [notificationApi.reducerPath]: notificationApi.reducer,
  [auctioSalesBuyerApis.reducerPath]: auctioSalesBuyerApis.reducer,
  [auctionSaleBuyNowApi.reducerPath]: auctionSaleBuyNowApi.reducer,
  [businessesApi.reducerPath]: businessesApi.reducer,
  [walletApi.reducerPath]: walletApi.reducer,
  [auctioSalesSellerApis.reducerPath]: auctioSalesSellerApis.reducer,
  [buyNowApi.reducerPath]: buyNowApi.reducer,
  [myActivityApi.reducerPath]: myActivityApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [authSlice.name]: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [favoritesApi.reducerPath]: favoritesApi.reducer,
  [homeApi.reducerPath]: homeApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [countriesApi.reducerPath]: countriesApi.reducer,
  [regionsApi.reducerPath]: regionsApi.reducer,
  [cityByRegionApi.reducerPath]: cityByRegionApi.reducer,
  [auctionApi.reducerPath]: auctionApi.reducer,
  [advanceSearchSlice.name]: advanceSearchSlice.reducer,
  [auctionSearch.reducerPath]: auctionSearch.reducer,
  [vehicleApi.reducerPath]: vehicleApi.reducer,
  [chatApi.reducerPath]: chatApi.reducer,
  [inspectionReportApi.reducerPath]: inspectionReportApi.reducer,
  [watchlistsApi.reducerPath]: watchlistsApi.reducer,
  [bidApi.reducerPath]: bidApi.reducer,
  [inspectionReportListApi.reducerPath]: inspectionReportListApi.reducer
});

export const makeStore = () =>
  configureStore({
    reducer: reducers,
    devTools: true,
    middleware: (gDM) =>
      gDM().concat(
        auctioSalesBuyerApis.middleware,
        auctionSaleBuyNowApi.middleware,
        auctioSalesSellerApis.middleware,
        businessesApi.middleware,
        walletApi.middleware,
        buyNowApi.middleware,
        myActivityApi.middleware,
        notificationApi.middleware,
        profileApi.middleware,
        authApi.middleware,
        favoritesApi.middleware,
        homeApi.middleware,
        categoryApi.middleware,
        countriesApi.middleware,
        regionsApi.middleware,
        cityByRegionApi.middleware,
        auctionApi.middleware,
        vehicleApi.middleware,
        auctionSearch.middleware,
        chatApi.middleware,
        inspectionReportApi.middleware,
        watchlistsApi.middleware,
        bidApi.middleware,
        inspectionReportListApi.middleware
      ),
  });

export const wrapper = createWrapper(makeStore);
