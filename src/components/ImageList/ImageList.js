import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const imgsMapping = {
  1: [{ rows: 5, cols: 15 }],
  2: [{ rows: 5, cols: 2 }, { rows: 5, cols: 2 }],
  3: [{ rows: 5, cols: 2 }, { rows: 3, cols: 2 }, { rows: 2, cols: 2 }],
  4: [{ rows: 5, cols: 2 }, { rows: 2, cols: 1 }, { rows: 5, cols: 1 }, { rows: 3, cols: 1 }],
  5: [{ rows: 5, cols: 2 }, { rows: 3, cols: 1 }, { rows: 2, cols: 1 }, { rows: 3, cols: 1 }, { rows: 2, cols: 1 }],
}
export default function CustomImageList({ handleOpen, itemData }) {
  return (
    <div onClick={() => handleOpen()}>
      <ImageList

        sx={{ width: '100%', height: 620 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData?.map((item, i) => {
          if (i > 4) return;
          const listLength = itemData.length > 5 ? 5 : itemData.length;

          return <ImageListItem
            key={item.id}
            cols={imgsMapping[listLength][i].cols}
            rows={imgsMapping[listLength][i].rows}
          >
            <Image
              fill
              {...srcset(item.url, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: 'cover' }}
              src={item.url}
            />
          </ImageListItem>
        })}
      </ImageList>
    </div>
  );
}
