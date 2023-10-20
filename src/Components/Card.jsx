import styled from "styled-components";
import {CardType} from "../Components/CardType.style";
import { theme } from "../css/Theme"

export default function Card({ id, name, types, url }) {

    const Container = styled.div`
    background-color: ${props => props.theme.backgroundTypes[types[0].type.name]};
    padding: 20px;
    display: flex;
    flex-direction: row;
    
`;

    const Conteudo = styled.div`
  display: flex ;
  flex-direction: column;
  padding: 20px;
`;

    const Types = () => {
        if (types[1]) {
            return types[0].type.name + " " + types[1].type.name
        } else {
            return types[0].type.name;
        }

    }

    return (

        <Container>

            <Conteudo>
                <p>{id}</p>
                <h3>{name}</h3>
                <CardType>{Types()}</CardType>

            </Conteudo>
            <img width={120} src={url} />
        </Container>

    );
}