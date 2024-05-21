import React from "react";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

export default function CityList() {
  const { cities, isLoading } = useCities();
  console.log(cities);
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map "></Message>
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((citie) => (
        <CityItem citie={citie} key={citie.id}></CityItem>
      ))}
    </ul>
  );
}
