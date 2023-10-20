import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import { Container } from "../Components/Container.style";
import styled from "styled-components";
import { Grid } from "@mui/material";

export default function Home() {

    const [pokemons, setPokemon] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {

        var endpoints = [];
        for (var i = 1; i < 53; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemon(res, console.log(res)))
            .catch((error) => console.error('Error ao acessar a API', error));
    }
    

    const Conteudo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
`;
    return (
        <Container>
            <Conteudo>

                <Grid container >
                    {pokemons.map((pokemon) => (
                        <Grid xs={12} md={3} sm={6} >
                            <Card id={pokemon.data.id} name={pokemon.data.name}
                                types={pokemon.data.types}
                                url={pokemon.data.sprites.other['official-artwork'].front_default} />
                        </Grid>
                    ))}




                </Grid>
            </Conteudo>
        </Container>
    );
}