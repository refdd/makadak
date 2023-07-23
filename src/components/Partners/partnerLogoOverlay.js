
import { Box, Card } from "@mui/material";
import partnersStyles from "./partners.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const PartnerLogoOverlay = ({ imgDimentions, src, hoverable, classN, size }) => {

  const router = useRouter();
  const navigate = (slug) => {
    router.push({
      pathname: "/partners/[slug]",
      query: {
        slug,
      },
    });
  };
  return (
    <>
      <Card
        className={`${
          size !== "sm" ? partnersStyles["card"] : partnersStyles["card-sm"]
        } ${!hoverable ? partnersStyles["hoverable-card"] : ""}`}
        onClick={() => navigate("ex")}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ height: "100%" }}
        >
          <Image
            alt="partnerLgo"
            src={src ? src : "/imgs/partnerEx.svg"}
            {...(imgDimentions ? imgDimentions : { width: 300, height: 300 })}
            className={` ${classN ? partnersStyles[classN] : partnersStyles["partners-logo"]}`}
          ></Image>
        </Box>
      </Card>
    </>
  );
};

export default PartnerLogoOverlay;
