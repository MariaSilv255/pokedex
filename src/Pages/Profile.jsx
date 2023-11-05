import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Card from "../Components/CardPokemon/Card";
import { Container } from "../css/Container.style";
import About from '../Components/about/About';
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from '../Components/Progress/index'
import { Grid } from "@mui/material";
import { Itens } from "../css/div.style";
import { Titulo2 } from "../css/Title.style";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Start from "../Components/Stars/Starts";
import { Fade } from "react-reveal";

export default function Profile() {

  useEffect(() => {
    getInfo();
  }, []);

  const { pokemonId } = useParams();
  const { apiData } = useSelector((state) => state.apiReducer);
  const [infoPokemon, setinfoPokemon] = useState([]);
  const [componentVisable, setComponentVisable] = useState(1);

  const Idpokemon = () => {
    const id = parseInt(pokemonId) - 1;
    return id;
  }

  const getInfo = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
      .then((response) => setinfoPokemon(response))
      .catch((error) => console.error('Error ao acessar a API', error));
  }
  const typeColor = () => {
    return apiData.pokemons[Idpokemon()].data.types[0].type.name;
  }

  const Customgrid = styled(Grid)`
  background-color: ${(prop) => prop.theme.backgroundTypes[prop.types]};
  border-radius: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  `;

  const showComponent = (numberComponet) => {
    setComponentVisable(numberComponet);
  };


  console.log(apiData.pokemons[Idpokemon()].data)
  return (

    <Container >
      {infoPokemon.length === 0 ? <Skeleton /> :
        <>

          <Grid>
            <Link to={'/'}><IoMdArrowBack size={50} /></Link>
          </Grid>
          <Grid container>

            <Customgrid sm={6} xs={12}  width={550}
              types={typeColor()}
            >
        
                <div>
                  <Card tamanho={190} marginCard={'0px'} id={apiData.pokemons[Idpokemon()].data.id} name={apiData.pokemons[Idpokemon()].data.name}
                    types={apiData.pokemons[Idpokemon()].data.types}
                    url={apiData.pokemons[Idpokemon()].data.sprites.other['official-artwork'].front_default} />
                </div>
        
            </Customgrid>


            <Grid sm={1}></Grid>

            <Grid sm={5} height={500}>

              <Itens>
                <Titulo2 types={typeColor()} onClick={() => showComponent(1)}>About</Titulo2>
                <Titulo2 types={typeColor()} onClick={() => showComponent(2)}>Stars</Titulo2>

              </Itens>


              {componentVisable === 1 &&
                <Fade>
                  <About
                    abilities={apiData.pokemons[Idpokemon()].data.abilities}
                    height={apiData.pokemons[Idpokemon()].data.height}
                    weight={apiData.pokemons[Idpokemon()].data.weight}
                    baseExp={apiData.pokemons[Idpokemon()].data.base_experience}
                    base={infoPokemon.data.base_happiness}
                    habitat={infoPokemon.data.habitat.name}
                    captureRate={infoPokemon.data.capture_rate}
                    info={infoPokemon.data.flavor_text_entries[6].flavor_text}
                    types={typeColor()}
                  />
                </Fade>
              }
              {componentVisable === 2 &&
                <Fade>
                  <Start width={500}
                    hp={apiData.pokemons[Idpokemon()].data.stats[0].base_stat}
                    Attack={apiData.pokemons[Idpokemon()].data.stats[1].base_stat}
                    defense={apiData.pokemons[Idpokemon()].data.stats[2].base_stat}
                    specialAttack={apiData.pokemons[Idpokemon()].data.stats[3].base_stat}
                    specialDefense={apiData.pokemons[Idpokemon()].data.stats[4].base_stat}
                    speed={apiData.pokemons[Idpokemon()].data.stats[5].base_stat}
                    types={typeColor()}
                  />
                   </Fade>
                  }
               


              </Grid>
          </Grid>

        </>
      }

    </Container>

  );
}