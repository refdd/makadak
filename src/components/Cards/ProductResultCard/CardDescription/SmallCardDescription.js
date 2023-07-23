import { Typography } from "@mui/material";

const SmallCardDescription = ({ tag, description, note }) => {
  return (
    <>
      <Typography
        className="small-card-description"
        fontWeight={600}
        fontSize={14}
        sx={{
          paddingLeft: 2,
          "@media (max-width: 776px)": {
            fontSize: "11px",
            marginBottom: "10px",
            height: "33px",
            overflow: "hidden",
          },
          height:25
        }}
      >
        {description}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop:'7px'
        }}
      >
        {tag}
        <Typography
          component={"p"}
          sx={{
            "@media (max-width: 776px)": {
              fontSize: "10px",
              textAlign: "right",
            },
          }}
        >
          {note}
        </Typography>
      </div>
    </>
  );
};

export default SmallCardDescription;
