import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Card from "../Components/CardPokemon/Card";
import { Container } from "../css/Container.style";
import About from '../Components/about/About';
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from '../Components/Progress/index'
import { Grid } from "@mui/material";
import { Color, Itens } from "../css/div.style";
import { Titulo2 } from "../css/Title.style";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";





export default function Profile() {

  useEffect(() => {
    getInfo();
  }, []);

  const { pokemonId } = useParams();
  const { apiData } = useSelector((state) => state.apiReducer);
  const [infoPokemon, setinfoPokemon] = useState([]);


  const Idpokemon = () => {
    const id = parseInt(pokemonId) - 1;
    return id;

  }


  const getInfo = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
      .then((response) => setinfoPokemon(response, console.log(response)))
      .catch((error) => console.error('Error ao acessar a API', error));
  }
  const typeColor = () => {
    return apiData.pokemons[Idpokemon()].data.types[0].type.name;
  }
  

  return (
   
    <Container >
    {infoPokemon.length === 0 ? <Skeleton /> :
<>
      <Grid>
        <Link to={'/'}><IoMdArrowBack size={50} /></Link>
      </Grid>
      <Grid container >

        <Color types={typeColor()}>

          <Grid sm={6} xs={12} width={550}>
            <Card tamanho={220} marginCard={'0px'} id={apiData.pokemons[Idpokemon()].data.id} name={apiData.pokemons[Idpokemon()].data.name}
              types={apiData.pokemons[Idpokemon()].data.types}
              url={apiData.pokemons[Idpokemon()].data.sprites.other['official-artwork'].front_default} />
          </Grid>
        </Color>

        <Grid sm={1}></Grid>

        <Grid sm={5} backgroundColor={'white'}>

          <Itens>
            <Titulo2 types={typeColor()}>About</Titulo2>
            <Titulo2 types={typeColor()}>Stars</Titulo2>
            <Titulo2 types={typeColor()}>Evolution</Titulo2>
          </Itens>

         


            <About
              abilities={apiData.pokemons[Idpokemon()].data.abilities}
              height={apiData.pokemons[Idpokemon()].data.height}
              weight={apiData.pokemons[Idpokemon()].data.weight}
              baseExp={apiData.pokemons[Idpokemon()].data.base_experience}
              growthRate={infoPokemon.data.growth_rate.name}
              base={infoPokemon.data.base_happiness}
              habitat={infoPokemon.data.habitat.name}
              captureRate={infoPokemon.data.capture_rate}
              info={infoPokemon.data.flavor_text_entries[6].flavor_text}
              types={typeColor()}
            />
            
        </Grid>
      </Grid>

  </>
  }

    </Container>
  
  );
}