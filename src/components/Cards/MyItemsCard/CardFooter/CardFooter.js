import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useCallback } from "react";

const CardFooter = ({ smallInfo, id }) => {
  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString);
    const options = {
      day: "numeric",
      month: "short",
    };
    return date.toLocaleDateString(undefined, options);
  }, []);

  return (
    <Box paddingInline={2} paddingBottom={2}>
      <Box
        borderTop={1}
        borderBottom={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography className="one-line" fontWeight={'bold'} variant="body2" color="primary">
          {smallInfo}
        </Typography>
        <Button variant="text" color="inherit">
          <Link style={{ textDecoration: 'none', color:'white' }} href={`/lot-details/${id}`}>
            View
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default CardFooter;
