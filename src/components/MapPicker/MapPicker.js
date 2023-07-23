import React, { useEffect } from "react";
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';

const MapPicker = () => {



  const libraries = useMemo(() => ['places'], []);
  const [lat, setLat] = useState(24.7136);
  const [lng, setLng] = useState(46.6753);
  const [geoLocaotion, setGeoLocation]= useState('');

  
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
                console.log(js);
                setGeoLocation(js.plus_code.compound_code)
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
        <GoogleMap
            options={mapOptions}
            zoom={14}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: '500px', height: '500px' }}
            onLoad={(map) => map.setCenter(mapCenter)}
            onClick={(e) => {
                const lat = e.latLng.lat()
                const lng = e.latLng.lng()
                setLat(lat)
                setLng(lng)
            }}
        >
            <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
        </GoogleMap>
    )
}

export default MapPicker