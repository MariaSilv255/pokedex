import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Profile() {

  const { pokemonId } = useParams();
  const { apiData } = useSelector((state) => state.apiReducer);
  console.log(apiData)
  

    return (
        <p>{pokemonId}</p>
    );
}