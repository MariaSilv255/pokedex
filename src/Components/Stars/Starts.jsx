import { Container } from "../../css/Container.style";
import { Titulo2 } from "../../css/Title.style";
import { Itens } from "../../css/div.style";
import { Contem, Item, Skill } from "../Skill/Skill.style";

export default function Start({hp ,Attack , defense , specialAttack , specialDefense , speed , types}) {
    return (
        <Container>
            <Titulo2 types={types}>Base Stats</Titulo2>

            <Titulo2>HP</Titulo2>

            <Contem>
                <Skill>
                    <Item types={types} tamanho={hp} />
                </Skill>
            </Contem>


            <Titulo2>Attack</Titulo2>
            <Contem>
                <Skill>
                    <Item types={types} tamanho={Attack} />
                </Skill>
            </Contem>


            <Titulo2>Defense</Titulo2>
            <Contem>
                <Skill>
                    <Item types={types} tamanho={defense} />
                </Skill>
            </Contem>
            <Titulo2>Sp. Atk</Titulo2>
            <Contem>
                <Skill>
                    <Item types={types} tamanho={specialAttack} />
                </Skill>
            </Contem>
            <Titulo2>Sp. Def</Titulo2>
            <Contem>
                <Skill>
                    <Item types={types} tamanho={specialDefense} />
                </Skill>
            </Contem>
            <Titulo2>Speed</Titulo2>
            <Contem>
                <Skill>
                    <Item types={types} tamanho={speed} />
                </Skill>
            </Contem>





        </Container>
    )
}