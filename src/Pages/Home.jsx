import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/CardPokemon/Card";
import { Container } from "../css/Container.style";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { apiProfile } from '../redux/api/action';
import { Link } from "react-router-dom";
import { Texto } from "../Components/Input/Input.style";


export default function Home() {

    const [pokemons, setPokemon] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {

        var endpoints = [];
        for (var i = 1; i < 101; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemon(res))
            .catch((error) => console.error('Error ao acessar a API', error));
    }


    //-------------------REDUX----------------
    const dispatch = useDispatch();
    const handleClickProfile = () => {
        dispatch(apiProfile({ pokemons }))
    }
    //-----------------FIM REDUX----------------

    const Pesquisa = (texto) => {
        var filter = [];
        const name = texto.toLowerCase();

        if (name === "") {
            getPokemons();
        }

        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filter.push(pokemons[i]);
            }
        }
        setPokemon(filter);
    }

    return (
        <Container onClick={handleClickProfile}>
            <Texto placeholder="Name Pokemon" onChange={((texto) => Pesquisa(texto.target.value))} />

            <Grid container>

                {pokemons.map((pokemon) => (
                 
                        <Grid xs={12} md={3} sm={6} key={pokemon.data.id}>

                            <Link to={`profile/${pokemon.data.id}`}>

                                <Card tamanho={120} id={pokemon.data.id} name={pokemon.data.name}
                                    types={pokemon.data.types}
                                    url={pokemon.data.sprites.other['official-artwork'].front_default} />

                            </Link>
                        </Grid>
                 
                ))}

            </Grid>
            
        </Container>
    );
}