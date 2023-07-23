import { useMemo } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Grid } from "@mui/material";

export default function Layout({ route, children }) {
 

  return (
    <Grid sx={{
      minHeight: '100%',
      position: 'relative',
      maxWidth: '100vw',
      overflow: 'hidden'
    }}>
      { <Header
        route={route}
        sx={{
          background: '#ff0',
          padding: '10px'
        }}
      />}
      <Grid sx={{
        padding: '10px',
        paddingBottom: '60px',
        maxWidth: '100vw',
        overflow: 'hidden',
        marginBottom: { xs: '50vh', sm: '30vh' }
      }}>
        {children}
      </Grid>
      <Footer />
    </Grid>
  );
}
