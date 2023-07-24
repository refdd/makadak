import React, { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ImagePlaceholder from "@/components/ImagePlaceholder/ImagePlaceholder";
import Image from "next/image";
import { fetchApi } from "@/helpers/fetchApi";

const ImageUploader = ({ file, setFile, upload, imageMapping }) => {
  function uploadSingleFile(e) {
    let ImagesArray = [];
    Object.entries(e.target.files).forEach((e) =>
      ImagesArray.push(URL.createObjectURL(e[1]))
    );
    setFile([...file, ...ImagesArray]);
  }

  const deleteFile = async (e) => {
    const s = file.filter((item, index) => index !== e);
    setFile(s);

    if (s?.[0].startsWith("blob")) return;
    const mediaId = imageMapping[s?.[0]];
    console.log(mediaId, imageMapping, s[0]);
    await fetchApi(
      { url: `auction-vehicles/${mediaId}/delete-media`, method: "DELETE" },
      true
    );
  };

  return (
    <form style={{ width: "100%", height: "100%" }}>
      <Grid className="form-group" justifyContent={"center"} display={"flex"}>
        <Button
          component="label"
          style={{ width: 335, height: 50, borderRadius: 12 }}
          startIcon={<AddIcon />}
          variant="outlined"
        >
          <input type="file" onChange={uploadSingleFile} multiple hidden />
        </Button>
      </Grid>
      {file.length > 0 && (
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} md={12}>
            <Grid
              container
              height={"100%"}
              my={3}
              spacing={2}
              padding={4}
              justifyContent={"center"}
              overflow={"scroll"}
              maxHeight={"90vh"}
              margin={"auto"}
            >
              {file.map((item, index) => {
                return (
                  <Grid
                    key={item}
                    item
                    xs={12}
                    md={4}
                    position={"relative"}
                    width={350}
                    height={300}
                    borderRadius={3}
                  >
                    <Image
                      src={item}
                      alt=""
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        padding: 15,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        cursor: "pointer",
                      }}
                    >
                      <HighlightOffIcon
                        fontSize={"10"}
                        onClick={() => deleteFile(index)}
                      />
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      )}
      {file.length === 0 && (
        <Grid container spacing={2} padding={2}>
          {Array(4).fill(
            <Grid item xs={6} sm={6} sx={{ height: { xs: 90, md: 180 } }}>
              <ImagePlaceholder />
            </Grid>
          )}
        </Grid>
      )}
    </form>
  );
};

export default ImageUploader;
