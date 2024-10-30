"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "../../components/weatherCard";
import styled from "styled-components";
import { Weather } from "../interfaces/weather";


const WeatherContentWrapper = styled.main`
  width: 80vw;
  margin: auto;
  background-color: DarkOrange;
`;

const CityName = styled.h1`
  color: Black;
  Text-align: center;
`;

const WeatherCardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: black 5px solid;
  background-color: LIghtYellow;
  justify-content: center;
`;

export default function CityPage() {
  const params = useParams();

  // Fetch weather data with SWR
  const { data, error } = useSWR(
    `/api/getWeatherData?city=${params.city}`,
    (url) => fetch(url).then((res) => res.json())
  );

  // Handle error and loading states
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // If there is data, get the days otherwise an empty array.
  const days = data?.days || [];

  return (
    <WeatherContentWrapper>
      <CityName>{params.city}</CityName>
      <WeatherCardsContainer>
        {days.map((weather: Weather, i: number) => (
          <WeatherCard
            key={i}
            datetime={weather.datetime}
            conditions={weather.conditions}
            description={weather.description}
            tempmin={weather.tempmin}
            tempmax={weather.tempmax}
          />
        ))}
      </WeatherCardsContainer>
    </WeatherContentWrapper>
  );
}
