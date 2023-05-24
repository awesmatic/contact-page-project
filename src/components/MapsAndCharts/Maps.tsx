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

export interface CountryData {
  active: number;
  activePerOneMillion: number;
  cases: number;
  casesPerOneMillion: number;
  continent: string;
  country: string;
  countryInfo: {
    flag: string;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    _id: number;
  };
  critical: number;
  criticalPerOneMillion: number;
  deaths: number;
  deathsPerOneMillion: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  population: number;
  recovered: number;
  recoveredPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
}

interface CountryDatas {
  country: string;
  activeCases: number;
  recoveredCases: number;
  deaths: number;
  position: [number, number];
}

const Maps: FC<{ data: CountryData[] }> = ({ data }) => {
  return (
    <div className="m-2 sm:m-4 ">
      <MapContainer
        center={[20, 78]}
        zoom={3}
        scrollWheelZoom={false}
        style={{ height: "270px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.map((countryData) => (
          <Marker
            position={[
              countryData.countryInfo.lat,
              countryData.countryInfo.long,
            ]}
            key={countryData.country}
          >
            <Popup>
              <div>
                <h3>{countryData.country}</h3>
                <p>Active Cases: {countryData.active}</p>
                <p>Recovered Cases: {countryData.recovered}</p>
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
