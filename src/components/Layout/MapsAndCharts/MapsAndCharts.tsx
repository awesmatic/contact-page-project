import { useQuery } from "@tanstack/react-query";
import { FC, useState, useEffect } from "react";
import axios from "axios";
import ChartComponent from "./Chart";
import Maps from "./Maps";

interface Data {
  worldwideData: any;
  countryData: any;
  graphData: any;
}

const MapsAndCharts: FC = () => {
  const worldwideDataQuery = useQuery(
    ["worldwideData"],
    () =>
      axios.get("https://disease.sh/v3/covid-19/all").then((res) => res.data),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const countryDataQuery = useQuery(
    ["countryData"],
    () =>
      axios
        .get("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.data),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const graphDataQuery = useQuery(
    ["graphData"],
    () =>
      axios
        .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
        .then((res) => res.data),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Data>({
    worldwideData: null,
    countryData: null,
    graphData: null,
  });

  useEffect(() => {
    if (
      worldwideDataQuery.isLoading ||
      countryDataQuery.isLoading ||
      graphDataQuery.isLoading
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    if (
      worldwideDataQuery.isError ||
      countryDataQuery.isError ||
      graphDataQuery.isError
    ) {
      setError(true);
    } else {
      setError(false);
    }

    if (worldwideDataQuery.isSuccess) {
      setData((prevData) => ({
        ...prevData,
        worldwideData: worldwideDataQuery.data,
      }));
    }

    if (countryDataQuery.isSuccess) {
      setData((prevData) => ({
        ...prevData,
        countryData: countryDataQuery.data,
      }));
    }

    if (graphDataQuery.isSuccess) {
      setData((prevData) => ({
        ...prevData,
        graphData: graphDataQuery.data,
      }));
    }
  }, [
    worldwideDataQuery.isLoading,
    countryDataQuery.isLoading,
    graphDataQuery.isLoading,
    worldwideDataQuery.isError,
    countryDataQuery.isError,
    graphDataQuery.isError,
    worldwideDataQuery.isSuccess,
    countryDataQuery.isSuccess,
    graphDataQuery.isSuccess,
  ]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred.</div>;
  }

  console.log(data);
  const casesData = Object.entries(data.graphData.cases).map(
    ([date, cases]) => ({
      date,
      cases,
    })
  );

  console.log(casesData);
  return (
    <div className="w-full   ">
      <ChartComponent data={casesData} dataPointLimit={100} />
      <Maps />
    </div>
  );
};

export default MapsAndCharts;
