import Categories from "@/widgets/Categories/Categories";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {fetchApi} from "@/helpers/fetchApi";
import { useMediaQuery } from "@mui/material";


const C2C = ({categoriesData}) => {

    categoriesData.map((item) => {
        item['link'] = `/c2c/${item.id}`
        return item
    })

  const isMobile = useMediaQuery("(max-width: 600px)");

    return (
        <div >
            <Grid
                justifyContent={"center"}
                sx={{textAlign: "center", width: "50%", margin: "auto", marginTop: 5}}
            >
                <Typography fontWeight={900}>SELECT CATEGORY</Typography>
                <Typography fontWeight={900} color={"primary"}>
                    What kind of item would you like to list?
                </Typography>
            </Grid>
            <Grid container>
                <Grid item xs={12} maxWidth={800} sx={{padding: 3}}>
                    <Typography
                        fontWeight={900}
                        fontSize={20}
                        color="rgb(226 232 240)"
                        sx={{textTransform: "uppercase", marginBottom: 2, marginLeft: 2}}
                    >
                        Browse by Category
                    </Typography>
                    <Categories seeAll={false} pageView={isMobile} categoriesData={categoriesData}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default C2C;

export const getServerSideProps = async (context) => {

    try {
        const response = await fetchApi({url: "auction-vehicle-types"})

        return {
            props: {
                categoriesData: response,
            },
        };
    } catch (error) {
        console.error("Error:", error.message);

        return {
            props: {
                error: error.message,
            },
        };
    }
};
