import { Box, Typography } from "@mui/material";

export default function TopupTitle({ action, title, downPayment }) {
  return (
    <Box>
      <Box marginBottom={1}>
        {action === "bid" ? (
          <Typography
            align="center"
            fontWeight={700}
            variant="h5"
            sx={{
              fontSize: 20,
              "@media (max-width: 768px)": {
                fontSize: 16,
              },
            }}
          >
            Place your bid on {title}
          </Typography>
        ) : (
          <Typography
            align="center"
            fontWeight={700}
            variant="h4"
            sx={{
              fontSize: 20,
            }}
          >
            Make an offer on
            <br /> {title}
          </Typography>
        )}
      </Box>
      <Typography
        align="center"
        fontWeight={700}
        component="p"
        sx={{
          color: "#9d9d9d",
          "@media (max-width: 768px)": {
            fontSize: 10,
          },
        }}
      >
        <Typography
          align="center"
          fontWeight={700}
          component="span"
          sx={{
            color: "#fff",
            whiteSpace: "nowrap",
            "@media (max-width: 768px)": {
              fontSize: 10,
            },
          }}
        >
          {downPayment?.currency?.code} {downPayment?.amount.toLocaleString()}&nbsp;
        </Typography>
        will be deducted from your wallet as a down payment.
      </Typography>
    </Box>
  );
}
