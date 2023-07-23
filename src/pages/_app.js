import * as React from "react";
import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "@/components/Layout/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { wrapper } from "@/redux/store";
import { Provider, useDispatch } from "react-redux";
import { themeOptions } from "@/theme";
import Head from "next/head";
import ProtectedRoute from "@/HOC/ProtectedRoute";
import { useGetConfigsQuery } from "@/redux/apis/account/myWatchList.api";
import { useEffect } from "react";
import { setConfigs } from "@/redux/slices/auth.slice";

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps, session } = props;
  const theme = React.useMemo(() => createTheme(themeOptions), []);
  const route = props?.router?.state?.route;
  const getConfQ = useGetConfigsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (getConfQ.data)
      dispatch(setConfigs({
        ...getConfQ?.data?.filterOptions,
        sellerTypes: getConfQ?.data?.sellerTypes
      }))
  }, [getConfQ])
  return (
    <Provider store={store}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/imgs/logo2.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/imgs/logo2.svg"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {/* <SessionProvider session={session}> */}
        <ProtectedRoute store={store} route={route} Component={Component} {...pageProps} {...rest} />

        {/* </SessionProvider> */}
      </ThemeProvider>
    </Provider>
  );
}

export default wrapper.withRedux(App);
