import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
const PartnersCard = (props) => {
  const router = useRouter();
  const hanldeCardClick = (slug) => {
    router.push({
      pathname: `/buisness/${props?.id}`,
    });
  };
  return (
    <Box
      onClick={() => hanldeCardClick()}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"end"}
      width={"100%"}
      height={250}
      sx={{
        position: "relative",
        borderRadius: 3,
        background: "white",
        cursor: "pointer",
      }}
      my={1}
    >
      <Image
        alt="partnerLgo"
        src={props?.coverImagePath}
        // src={(businessLogo?.length && businessLogo[0].url)}
        fill
      />
      <Box
        position={"absolute"}
        bottom={"-10%"}
        right={12}
        zIndex={8}
        width={50}
        height={50}
        sx={{ borderRadius: 3, border: "3px solid black", background: "white" }}
      >
        <Image alt="partnerLgo" src={props?.businessLogo[0]?.url} fill />
      </Box>
      <Box p={1} zIndex={9}>
        <Typography fontSize={18} fontWeight={400}>
        {props?.name}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 74.71%);",
          borderRadius: 3,
        }}
      />
    </Box>
  );
};

export default PartnersCard;
