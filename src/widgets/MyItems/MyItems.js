import React, { useEffect, useState } from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import ItemsTabs from "./ItemsTabs";
import MyItemsCard from "@/components/Cards/MyItemsCard/MyItemsCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SliderBlock from "../SliderBlock/SliderBlock";
import SalesCard from "@/components/Cards/SalesCard/SalesCard";
import { useSelector } from "react-redux";
import { useGetAuctionBySellerIdQuery } from "@/redux/apis/auctionApi";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return value === index && <div key={index}>{children}</div>;
}

const MyItems = () => {
  const [tabVal, setTabVal] = useState(0);
  const { user } = useSelector(state => state.auth)
  const { data } = useGetAuctionBySellerIdQuery({ sellerId: user.id });

  const items = { auction: [], sale: [] }
  const itemsData = data?.data?.reduce((acc, item) => {
    if (item.saleType === 'auction') {
      return { ...acc, auction: [...acc.auction, item] };
    }
    if (item.saleType === 'sale')
      return { ...acc, sale: [...acc.sale, item] };
  }, items);

  const tabs = [
    {
      label: "Auctions",
      isActive: tabVal === 0,
    },
    {
      label: "Sales",
      isActive: tabVal === 1,
    },
  ];
  return (
    <Grid
      flexDirection={"column"}
      width={"100%"}
      padding={"2% 2% 0 2%"}
      sx={{
        "@media(max-width: 776px)": {
          padding: "1% 0px 0 10px",
        },
      }}
    >
      <SectionTitle fullWidth title={"My Items"}>
        <ItemsTabs tabs={tabs} value={tabVal} setValue={setTabVal} />
      </SectionTitle>
      <TabPanel value={tabVal} index={0}>
        <SliderBlock
          slideMaxWidth={300}
          spaceBetween={10}
          slidesPerView={"auto"}
          navigation={true}
        >
          {
            itemsData?.auction?.map(el => <MyItemsCard {...el} img={el?.mediaPhotos?.length ? el.mediaPhotos[0].url : '/imgs/logo2.svg'} key={el.id} />)
          }

        </SliderBlock>
        {itemsData?.auction?.length === 0 &&
          <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: 3 }}>
            <SliderBlock
              slideMaxWidth={300}
              spaceBetween={10}
              slidesPerView={"auto"}
              navigation={true}
            >
              {[...Array(4)].map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  sx={{ width: 200, height: 200, margin: "0 16px 16px 0", borderRadius: '8px' }}
                />
              ))}
            </SliderBlock>
          </Box>
        }
      </TabPanel>
      <TabPanel value={tabVal} index={1}>
        <SliderBlock
          slideMaxWidth={300}
          spaceBetween={10}
          slidesPerView={"auto"}
        >
          {
            itemsData?.sale?.map(el => <SalesCard {...el} img={el.mediaPhotos[0].url} key={el.id} />)
          }
        </SliderBlock>
        {itemsData?.sale?.length === 0 &&
          <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: 3 }}>
            <SliderBlock
              slideMaxWidth={300}
              spaceBetween={10}
              slidesPerView={"auto"}
              navigation={true}
            >
              {[...Array(4)].map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  sx={{ width: 200, height: 200, margin: "0 16px 16px 0", borderRadius: '8px' }}
                />
              ))}
            </SliderBlock>
          </Box>
        }
      </TabPanel>
    </Grid>
  );
};

export default MyItems;
