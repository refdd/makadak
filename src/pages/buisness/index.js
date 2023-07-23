import PartnersCard from "@/components/Partners/partnersCard";
import { Box, Grid, LinearProgress, Skeleton, Typography } from "@mui/material";
import { useGetBusinessesListQuery } from "@/redux/apis/businessesApi";

const Partners = () => {
  const { data, isLoading } = useGetBusinessesListQuery();

  return (
    <Grid container p={2}>
      {data?.data?.map((business) => (
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} mb={5} key={business.id}>
          <PartnersCard {...business} />
        </Grid>
      ))}
      {!data?.data &&
        [...Array(7)].map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            sx={{
              width: 200,
              height: 200,
              margin: "0 16px 16px 0",
              borderRadius: "8px",
            }}
          />
        ))}
      <Box textAlign={"center"} width={"100%"}>
        {isLoading && <LinearProgress color="success" />}
        {(!data?.data || !data?.data?.length) && !isLoading && (
          <>
            <Typography
              lineHeight={1}
              fontSize={"600%"}
              fontWeight={1000}
              color={"#171717"}
            >
              NO DATA YET
            </Typography>
            <Typography fontWeight={200} fontSize={14}>
              Try again later
            </Typography>
          </>
        )}
      </Box>
    </Grid>
  );
};

export default Partners;
