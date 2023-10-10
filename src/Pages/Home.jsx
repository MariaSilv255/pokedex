import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import { Container } from "../Components/Container.style";

export default function Home() {

    const [pokemons, setPokemon] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {

        var endpoints = [];
        for (var i = 1; i < 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemon(res, console.log(res)))
            .catch((error) => console.error('Error ao acessar a API', error));




    }



    return (
        <Container>
            {pokemons.map((pokemon) => (
                <Card id={pokemon.data.id} name={pokemon.data.name} types={pokemon.data.types} url={pokemon.data.sprites.other['official-artwork'].front_default} />
            ))};
        </Container>
    );
}