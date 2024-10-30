"use client";

import styled from "styled-components";

import { useState } from "react";
import Link from "next/link";


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
  padding: 20px;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: DarkOrange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  
  &:hover {
    background-color: #005bb5;
  }
`;

export default function Home() {
  const [city, setCity] = useState("");

  return (
    <StyledDiv>
      <h1>Find the Weather in any city!</h1>
      <p>Enter a city name below to get the current weather</p>
      <input type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)} />
      <Link href={`/${city}`}>
        <StyledButton>
          Get Weather
        </StyledButton>
      </Link>
    </StyledDiv>
  );
}
