import ProductListHeader from "@/widgets/ProductList/ProductListHeader";
import SliderBlock from "@/widgets/SliderBlock/SliderBlock";
import Box from "@mui/material/Box";
import ProductCardMain from "../Cards/ProductCard/ProductCardMain";
import UpcomingLiveAuctionCard from "../Cards/AuctionCard/UpcomingLiveAuctionCard";
import HeroImg from "../HeroImg/HeroImg";
import HeroVideo from "../HeroVideo/HeroVideo";
import { useGetHomeCategoriesQuery } from "@/redux/apis/homeApi";
import SoldProductCard from "../Cards/ProductCard/SoldProductCard";

const PageBuilder = ({ structure, type, listProps, isCategory }) => {
  const categoriesData = useGetHomeCategoriesQuery();
  return (
    Array.isArray(structure) &&
    structure?.map((el, i) => {
      const cardMapping = {
        auction: UpcomingLiveAuctionCard,
        sale: ProductCardMain,
      };

      if (el.title === "categories_advertisements") {
        const AdElement = el.advertData[0].type === "1" ? HeroImg : HeroVideo;
        return (
          <div style={{ margin: "50px 0" }} key={i}>
            <a href={el.advertData[0].link} target="_blank">
              <AdElement img={el.advertData[0].path} />
            </a>
          </div>
        );
      }

      let ListElement = cardMapping[type];
      if (el.title === "categories_recentlySold") ListElement = SoldProductCard;
      const renderCards = el?.auctions?.map((cardEl) => {
        const cardData = {
          country: cardEl?.country?.countryCode,
          img: cardEl?.mediaPhotos?.length ? cardEl?.mediaPhotos[0].url : "",
          title: cardEl?.title,
          info: cardEl?.smallInfo,
          description: cardEl?.description,
          analytics: cardEl?.analytics,
          price:
            cardEl?.vehiclePrice ??
            (cardEl?.highestBidPrice || cardEl?.startingPrice),
          deadline: cardEl?.endAt,
          isFav: cardEl?.isFavourite,
          totalBids: cardEl?.totalBids,
          featured: cardEl?.featured,
          id: cardEl?.id,
          startAt: cardEl?.startAt,
          link: `/lot-details/${cardEl?.id}`,
          catName: el.title.split("categories_")[1],
          flag: cardEl?.country?.flagImagesUrl,

          lot: cardEl?.lot,
          state: cardEl?.state,

          saleType: cardEl?.saleType,
        };
        return <ListElement data={cardData} key={el.catId} />;
      });

      return (
        <Box key={i} my={3}>
          {el.title && (
            <>
              <ProductListHeader
                type={type}
                isCategory={isCategory}
                filter={el.filter}
                title={el.title.split("categories_")[1]}
                titleLink={`category/${el.catId}`}
              />
              <br />
            </>
          )}
          <SliderBlock {...listProps}>{renderCards}</SliderBlock>
        </Box>
      );
    })
  );
};

export default PageBuilder;
