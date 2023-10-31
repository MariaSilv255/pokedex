import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Card from "../Components/CardPokemon/Card";
import { Container } from "../css/Container.style";
import About from '../Components/about/About';
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from '../Components/skeleton/index'

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
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${Idpokemon()}`)
      .then((response) => setinfoPokemon(response))
      .catch((error) => console.error('Error ao acessar a API', error));
    
  }
console.log(infoPokemon)
  return (
    <Container>

      <Card marginCard={'0px'} id={apiData.pokemons[Idpokemon()].data.id} name={apiData.pokemons[Idpokemon()].data.name}
        types={apiData.pokemons[Idpokemon()].data.types}
        url={apiData.pokemons[Idpokemon()].data.sprites.other['official-artwork'].front_default} />

      {infoPokemon.length === 0 ? <Skeleton /> :

        <About
          abilities={apiData.pokemons[Idpokemon()].data.abilities}
          height={apiData.pokemons[Idpokemon()].data.height}
          weight={apiData.pokemons[Idpokemon()].data.weight}
          baseExp={apiData.pokemons[Idpokemon()].data.base_experience}
          growthRate={infoPokemon.data.growth_rate.name}
          base={infoPokemon.data.base_happiness}
       
    

        />
      }
    </Container>
  );
}