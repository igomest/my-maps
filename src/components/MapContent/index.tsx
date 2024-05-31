import { useEffect, useRef } from "react";
import { Loader } from "google-maps";
import { getCurrentPosition } from "../../utils/geolocation";
import { Layout } from "antd";

const GOOGLE_MAPS_API = import.meta.env.GOOGLE_MAPS_API;

const loader = new Loader("AIzaSyCW9PRaulSeZWFsxnTkA50d2Ym2PwFT_-A");

export const MapContent = () => {
  const mapRef = useRef<google.maps.Map>();
  const fetchData = async () => {
    await loader.load();
    const position = await getCurrentPosition({ enableHighAccuracy: true });
    const divMap = document.getElementById("map") as HTMLDivElement;
    mapRef.current = new google.maps.Map(divMap, {
      zoom: 15,
      center: { lat: position.lat, lng: position.lng },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout
      id="map"
      style={{ height: "100%", width: "100%", borderRadius: "20px" }}
    />
  );
};
