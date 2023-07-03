import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

export default function ISSTracker() {
  const URL = "https://api.wheretheiss.at/v1/satellites/25544";
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch ISS coordinates.");
    }
    const data = await response.json();
    return { longitude: data.longitude, latitude: data.latitude };
  };

  const { data, error } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  const handleRefresh = () => {
    mutate();
  };
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <main>
      {data ? (
        <>
          <Map longitude={data.longitude} latitude={data.latitude} />
          <Controls
            longitude={data.longitude}
            latitude={data.latitude}
            onRefresh={handleRefresh}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
