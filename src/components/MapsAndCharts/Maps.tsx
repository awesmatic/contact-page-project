import React, { FC } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.prototype.options.iconRetinaUrl = markerIcon;
L.Icon.Default.prototype.options.iconUrl = markerIcon;
L.Icon.Default.prototype.options.shadowUrl = markerShadow;

export interface IAppProps {}

interface CountryData {
  country: string;
  activeCases: number;
  recoveredCases: number;
  deaths: number;
  position: [number, number];
}

const Maps: FC<IAppProps> = (props) => {
  const countriesData: CountryData[] = [
    {
      country: "United States",
      activeCases: 10000,
      recoveredCases: 50000,
      deaths: 1000,
      position: [37.0902, -95.7129],
    },
    {
      country: "United Kingdom",
      activeCases: 5000,
      recoveredCases: 40000,
      deaths: 800,
      position: [55.3781, -3.436],
    },
    // Add more country data objects as needed
  ];

  return (
    <div className="m-2 sm:m-4 ">
      <MapContainer
        center={[20, 0]}
        zoom={1}
        scrollWheelZoom={false}
        style={{ height: "270px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {countriesData.map((countryData) => (
          <Marker position={countryData.position} key={countryData.country}>
            <Popup>
              <div>
                <h3>{countryData.country}</h3>
                <p>Active Cases: {countryData.activeCases}</p>
                <p>Recovered Cases: {countryData.recoveredCases}</p>
                <p>Deaths: {countryData.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Maps;
