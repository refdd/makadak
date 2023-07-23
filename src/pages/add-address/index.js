import React, { useEffect } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddAddress(params) {

  const libraries = useMemo(() => ['places'], []);
  const [lat, setLat] = useState(24.7136);
  const [lng, setLng] = useState(46.6753);
  const [geoLocaotion, setGeoLocation] = useState('');
  const router = useRouter();

  const getGeoLocaotion = () => new Promise((res, rej) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`)
      .then(result => {
        res(result)
      }).catch(e => {
        rej(e)
      })

  })

  useEffect(() => {
    getGeoLocaotion().then(res => res.json())
      .then(js => {
        setGeoLocation(`address=${js?.plus_code?.compound_code || js?.plus_code?.global_code}&lng=${lng}&lat=${lat}`)
      }).catch(e => {
        console.log('##E', e);
      })
  }, [lng, lat])

  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);
  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <Grid
      wrap="nowrap"
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      sx={{ p: 2, pt: 3 }}
      height={{ xs: "93%", lg: "100%" }}
      bgcolor="#000"
    >
      <Grid
        item
        container
        height="100%"
        direction="column"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item>
          <Typography variant="inherit" fontWeight="bold">
            Add new Delivery Address
          </Typography>
        </Grid>
        <Grid item mt={{ xs: 2, lg: 4 }} width={{ xs: "100%", lg: "100%" }} >
          <Grid
            container
            direction="column"
            alignItems="center"
            border="1px solid #232323"
            borderRadius="14px"
            bgcolor="#000"
            overflow="hidden"
            height="100%"
            pb={1}
          >
            <Grid item poistiion="relative">
              <GoogleMap
                options={mapOptions}
                zoom={14}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: '550px', height: '500px' }}
                onLoad={(map) => map.setCenter(mapCenter)}
                onClick={(e) => {
                  console.log(e);
                  const lat = e.latLng.lat()
                  const lng = e.latLng.lng()
                  setLat(lat)
                  setLng(lng)
                }}
              >
                <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
              </GoogleMap>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        width="100%"
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Typography variant="caption" fontSize={14} fontWeight={400} my={2}>
          This address will not be shown to the public.
        </Typography>
        <Link href={`/checkout?${geoLocaotion}&id=${router.query.id}`} style={{ width: "100%", textAlign: "center" }}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ width: { xs: "100%", lg: "30%" } }}
          >
            Add new delivery address
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
