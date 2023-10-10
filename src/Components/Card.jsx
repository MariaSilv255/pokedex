import styled from "styled-components";
import { theme } from "./Theme";
import imgFundo from './img/6x3.svg'

export default function Card({ id, name, type, url }) {

    const Container = styled.div`
    background-color: ${({ theme }) => theme.backgroundTypes.bug};
    padding: 20px;
`;

    const Conteudo = styled.div`
  display: flex ;
  flex-direction: column;
  padding: 20px;
`;



    return (

        <Container>

            <Conteudo>
                <p>{id}</p>
                <h3>{name}</h3>

            </Conteudo>
            <img src={url} />
        </Container>

    );
}