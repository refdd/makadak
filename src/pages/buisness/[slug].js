import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import partnersStyles from "../../components/Partners/partners.module.css";
import PartnersCard from "@/components/Partners/partnersCard";
import PartnerProductsFilter from "@/components/Partners/partner/partnerProduct";
import FeaturedProducts from "@/components/Partners/partner/featured-product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCardMain from "@/components/Cards/ProductCard/ProductCardMain";
import ProductCardSmall from "@/components/Cards/ProductCard/FavouriteCard";
import PageBuilder from "@/components/PageBuilder/PageBuilder";
import {
  useGetBusinessesListPerBusinessQuery,
  useGetBusinessesListQuery,
} from "@/redux/apis/businessesApi";
import PartnerLogoOverlay from "@/components/Partners/partnerLogoOverlay";
import { useRouter } from "next/router";

const Partner = () => {
  const router = useRouter();

  const { data, isLoading } = useGetBusinessesListQuery();
  const [businessDetials, setBusinessDetials] = useState("");
  const lpbQ = useGetBusinessesListPerBusinessQuery({businessId: router?.query?.slug});

  useEffect(() => {

    if (data?.data?.length > 0) {
      setBusinessDetials(
        data?.data?.filter((ele) => +ele?.id === +router?.query?.slug)
      );
    }
  }, [data]);


  const listProps = {
    slideMaxWidth: 300,
    spaceBetween: 25,
    slidesPerView: "auto",
    navigation: true,
  };
  return (
    <>
      <Box className={partnersStyles["header"]}>
        <Image
          src={businessDetials[0]?.coverImagePath}
          fill
          alt="partner header"
          className={partnersStyles["header-img"]}
        ></Image>
      </Box>

      <Box px={{ xs: 2, sm: 2, md: 4 }} py={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          position={"relative"}
          //   px={4}
          //   py={2}
        >
          <Typography
            className={`${partnersStyles["font-size-40px"]}`}
            fontWeight={700}
          >
            {businessDetials[0]?.name}
          </Typography>
          <div className={`${partnersStyles["partner-logo-icon"]}`}>
            <Box className={partnersStyles["max-height-150px"]}>
              <PartnerLogoOverlay
                imgDimentions={{ height: 100, width: 100 }}
                hoverable
                src={businessDetials[0]?.businessLogo[0]?.url}
                classN={"logo-partner-img"}
              ></PartnerLogoOverlay>
            </Box>
          </div>
        </Stack>

        <Box mt={3}>
          <Typography>
            {businessDetials?.email}
          </Typography>
        </Box>
        {/* 
        <Box mt={4}>
          <PartnerProductsFilter></PartnerProductsFilter>
        </Box> */}
      </Box>

      <Box px={{ xs: 2, sm: 2, md: 4 }} py={2}>
        <PageBuilder
          structure={lpbQ?.data || []}
          type="sale"
          listProps={listProps}
        />
      </Box>
    </>
  );
};

export default Partner;
