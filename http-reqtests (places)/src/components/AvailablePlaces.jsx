import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState();
  const [errMsg, setErrMsg] = useState('')
  useEffect(() => {
    const getPlaces = async () => {
      setLoading(true);
      try{
      const res = await fetch("http://localhost:3000/places");
      // if(!res.ok){}
      const data = await res.json();
      console.log("data", data);
      setPlaces(data.places);
    }catch(err){
      console.log('err', err.message)
      setErrMsg(err.message)
    }
    setLoading(false);
    };

    getPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={places}
      loading={loading}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      errMsg={errMsg}
    />
  );
}
