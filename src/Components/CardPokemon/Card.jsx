import styled from "styled-components";
import { CardType } from "./CardType.style";
import { type } from "@testing-library/user-event/dist/type";
import { Container, Conteudo, Imagem, OrganizarType } from "./Card.style";


export default function Card({ id, name, types, url }) {

    //const Types = () => {
    //  if (types[1]) {
    //    return types[0].type.name + " " + types[1].type.name
    //} else {
    //   return types[0].type.name;
    //}
    //}

    return (
// <Container types={types[0].type.name}> : types é minha prop quando chamar no style vai ficar [prop.types]
        <Container types={types[0].type.name}>

            <Conteudo>
                <p>{id}</p>
                <h3>{name}</h3>

                <OrganizarType>
                    {types.map((type) => (
                        <CardType type={type.type.name}>{type.type.name}</CardType>

                    ))}

                </OrganizarType>



            </Conteudo>

            <Imagem>
                <img width={120} src={url} title={name} alt="Representação do pokemon" />
            </Imagem>

        </Container>


    );
}