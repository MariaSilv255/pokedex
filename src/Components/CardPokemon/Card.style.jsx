import styled from "styled-components";

export const Container = styled.div`
background-color: ${props => props.theme.backgroundTypes[props.types]};
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 15px;
position: relative;
border-radius: 7px;
  
`;

export const Conteudo = styled.div`
display: flex ;
flex-direction: column;
padding: 20px;
z-index: 1;
`;

export const Imagem = styled.div`
position: absolute;
bottom: 12px;
right: 0;
z-index: 2;
max-width: 50%;
`;

export const OrganizarType = styled.div`
    display: flex;
    padding-top:5px;
    gap: 20px;
`