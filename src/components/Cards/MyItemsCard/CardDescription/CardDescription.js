import { CardHeader, Typography } from "@mui/material";
import Image from "next/image";

const CardDescription = ({img, heading, description }) => {
  return (
    <CardHeader
      className="align-baseline"
      style={{ alignItems: 'flex-start' }}
      avatar={
        <Image
          src={img}
          width="100"
          height="100"
          alt="AUCTION TITLE ONE"
        />
      }
      title={
        <Typography className="two-line" variant="body1" paddingTop={1} component="h2">
          <strong>{heading}</strong>
        </Typography>
      }
      subheader={
        <Typography variant="body2" fontWeight={'600'} component="p" style={{ fontSize: '.8rem' }}>
          {description}
        </Typography>
      }
    ></CardHeader>
  );
};
export default CardDescription;
