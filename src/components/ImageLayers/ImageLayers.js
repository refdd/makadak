import styles from "./ImageLayers.module.css";
import { Box } from "@mui/material";
import Image from "next/image";
function ImageLayers({ imgs, imgWidth = 98, maxWidth, mobileWidth, mobileHeight, mobileMargin = 15, extraStyles }) {
  if (imgWidth >= 98) imgWidth = 98;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          overflow: "hidden",
          maxWidth: maxWidth ? maxWidth + "px" : "100%",
          ...extraStyles
        }}
      >
        {[imgs[0]].map((img, index) => {
          return (
            <Box key={index} width={{ xs: 200, sm: 400 }}
              height={185}
              maxWidth={280}
              position={'relative'}
            >
              <Image
                className={`object-fit ${styles.img}`}
                fill
                src={img}
                alt={'overlaping-img'}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default ImageLayers;
