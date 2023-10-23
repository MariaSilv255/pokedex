import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/CardPokemon/Card";
import { Container } from "../css/Container.style";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { apiProfile } from '../redux/api/action';
import { Link } from "react-router-dom";

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
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemon(res))
            .catch((error) => console.error('Error ao acessar a API', error));
    }


    //-------------------REDUX----------------

    const { apiData } = useSelector((state) => state.apiReducer);
    console.log({ apiData })

    const dispatch = useDispatch();

    const handleClickProfile = () => {
        dispatch(apiProfile({ pokemons }))
    }


    //-----------------FIM REDUX----------------

    return (
        <Container onClick={handleClickProfile}>

            <Grid container>
           
                {pokemons.map((pokemon) => (

                    <Grid xs={12} md={3} sm={6} key={pokemon.data.id}>
                        <Card id={pokemon.data.id} name={pokemon.data.name}
                            types={pokemon.data.types}
                            url={pokemon.data.sprites.other['official-artwork'].front_default} />
                    </Grid>
                ))}

            </Grid>

        </Container>
    );
}