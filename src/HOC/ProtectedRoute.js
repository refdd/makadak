import Auth from "@/pages/auth";
import { useDispatch, useSelector } from "react-redux";

import cookieCutter from "cookie-cutter";
import { isAuthed, setLogout, setTokenStore } from "@/redux/slices/auth.slice";
import { useGetProfileQuery } from "@/redux/apis/profile.api";
import Image from "next/image";
import NotificationProvider from "@/HOC/NotificationProvider";
import Layout from "@/components/Layout/Layout";

const { useEffect, useState } = require("react");

const ProtectedRoute = ({ store, route = "/", Component, ...rest }) => {
  const { authed } = useSelector((state) => state.auth);
  const [access, setAccess] = useState(null);
  const dispatch = useDispatch();
  const unprotectedRoutes = [
    "/",
    "/login",
    "/signup",
    "/reset-password",
    "/about",
    "/auth",
    "/category/[slug]",
    "/category",
    "/lot-details/[id]",
    "/buisness",
    "/buisness/[slug]",
    "/search"
  ];
  const { data, status } = useGetProfileQuery(store.getState()?.auth?.token?.accessToken, { skip: !store.getState()?.auth?.token?.accessToken });
  useEffect(() => {
    if (!!store.getState()?.auth?.token?.accessToken) {
      //get profile
      if (status === "fulfilled") {
        if (data) {
          dispatch(isAuthed({
            token: {
              accessToken: store.getState()?.auth?.token?.accessToken
            },
            user: data
          }));
          setAccess(true)
        } else {
          dispatch(setLogout());
          setAccess(false)
        }
      }
    } else {
      const cookieToken = cookieCutter.get("accessToken");
      if (cookieToken) {
        dispatch(setTokenStore(cookieToken));
      } else {
        setAccess(false)
        dispatch(setLogout());
      }
    }
  }, [route, status, store.getState()?.auth?.token?.accessToken]);

  useEffect(() => {
    if (authed || !!unprotectedRoutes.find((el) => el === route)) {
      setAccess(true);
    }
    if (window.performance) {
      //on refresh f5
      if (performance.navigation.type == 1) {
        if (authed || !!unprotectedRoutes.find((el) => el === route)) {
          setAccess(true);
        }
        if (
          !authed &&
          !unprotectedRoutes.find((el) => el === route) &&
          status === "fulfilled"
        ) {
          setAccess(false);
        }
      }
    }
  });

  if (access === null)
    return (
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Image width={150} height={75} src={"/imgs/logo2.svg"} />
      </div>
    );
  return access ? (
    <Layout {...rest} route={route}>
      <NotificationProvider user={data}>
        <Component {...rest} />
      </NotificationProvider>
    </Layout>
  ) : (
    <Auth />
  );
};

export default ProtectedRoute;
