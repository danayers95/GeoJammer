import React from "react";
import useGeolocation from "react-hook-geolocation";
<<<<<<< HEAD:client/src/components/Geolocator/Geolocator.js
import "./Geolocator.css";
=======
import './Geolocator.css';
>>>>>>> main:client/src/components/Geolocator.js

const Geolocator = () => {
  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000,
  });
  // console.log("success");
  return !geolocation.error ? (
    <ul className="list-group geo">
      <li className="list-group-item">Latitude: {geolocation.latitude}</li>
      <li className="list-group-item">Longitude: {geolocation.longitude}</li>
      <li className="list-group-item">Location accuracy: {geolocation.accuracy}</li>
      <li className="list-group-item">Altitude: {geolocation.altitude}</li>
      <li className="list-group-item">Altitude accuracy: {geolocation.altitudeAccuracy}</li>
      <li className="list-group-item">Heading: {geolocation.heading}</li>
      <li className="list-group-item">Speed: {geolocation.speed}</li>
      <li className="list-group-item">Timestamp: {geolocation.timestamp}</li>
    </ul>
  ) : (
    <p>No geolocation, sorry.</p>
  );
};
export default Geolocator;
