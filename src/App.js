import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapStyles from "./mapStyles"
const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
}
const center = {
  lat: 41.881832,
  lng: -87.623177
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}
function Map(){
  return(
     <GoogleMap mapContainerStyle = {mapContainerStyle}
      zoom={11}
      center={center}
      options={options}
      ></GoogleMap>
  );
};
const libraries = ["places"];
export default function App(){
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries});
  if (!isLoaded) return <h1>Loading...</h1>;
  return <div><Map /></div>;
};
