import SectionHeader from "./SectionHeader/SectionHeader";
import SliderBlock from "@/widgets/SliderBlock/SliderBlock";
import { Grid } from "@mui/material";

export default function SectionList({
  title,
  link,
  mini,
  slidesPerView,
  slideWidth,
  slideMaxWidth,
  navigation,
  spaceBetween,
  mobileTitleStyles,
  children,
}) {
  return (
    <>
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
        <Grid item position={"relative"}>
          <div>
            <SectionHeader
              title={title}
              mobileTitleStyles={mobileTitleStyles}
              link={link}
              mini={mini}
            />
            <SliderBlock
              slidesPerView={slidesPerView}
              navigation={navigation}
              spaceBetween={spaceBetween}
              slideWidth={slideWidth}
              slideMaxWidth={slideMaxWidth}
            >
              {children}
            </SliderBlock>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
