import React, { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ImagePlaceholder from "@/components/ImagePlaceholder/ImagePlaceholder";
import Image from "next/image";
import { fetchApi } from "@/helpers/fetchApi";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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

    if (s?.[0]?.startsWith("blob")) return;
    if (!imageMapping) return;
    const mediaId = imageMapping[s?.[0]];
    console.log(mediaId, imageMapping, s[0]);
    await fetchApi(
      { url: `auction-vehicles/${mediaId}/delete-media`, method: "DELETE" },
      true
    );
  };
  // Drag and Drop Handlers
  const moveFile = (fromIndex, toIndex) => {
    const updatedFile = [...file];
    const draggedItem = updatedFile[fromIndex];
    updatedFile.splice(fromIndex, 1);
    updatedFile.splice(toIndex, 0, draggedItem);
    setFile(updatedFile);
  };

  const DragItem = ({ index }) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: "IMAGE",
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, dropRef] = useDrop({
      accept: "IMAGE",
      hover: (item) => {
        if (item.index !== index) {
          moveFile(item.index, index);
          item.index = index;
        }
      },
    });

    return (
      <div ref={(node) => dragRef(dropRef(node))}>
        <Grid
          key={file[index]}
          item
          xs={12}
          md={4}
          position={"relative"}
          borderRadius={3}
          style={{
            cursor: "move",
            opacity: isDragging ? 0.5 : 1,
            transition: "opacity 0.2s ease",
          }}
        >
          <Image
            src={file[index]}
            alt=""
            width={300}
            height={240}
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
              left: 11,
              cursor: "pointer",
            }}
          >
            <HighlightOffIcon
              fontSize={"10"}
              onClick={() => deleteFile(index)}
            />
          </div>
        </Grid>
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <form style={{ width: "100%", height: "100%" }}>
        <Grid className="form-group" justifyContent={"center"} display={"flex"}>
          <Grid
            className="form-group"
            justifyContent={"center"}
            display={"flex"}
          >
            <Button
              component="label"
              style={{ width: 335, height: 50, borderRadius: 12 }}
              startIcon={<AddIcon />}
              variant="outlined"
            >
              <input type="file" onChange={uploadSingleFile} multiple hidden />
            </Button>
          </Grid>
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
                {file.map((item, index) => (
                  <DragItem key={item} index={index} />
                ))}
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
    </DndProvider>
  );
};

export default ImageUploader;
