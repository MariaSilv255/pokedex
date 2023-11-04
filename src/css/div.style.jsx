import styled from "styled-components";

export const Color = styled.div`
background-color: ${(prop) => prop.theme.backgroundTypes[prop.types]};
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px;

`;

export const Itens = styled.div`

display: flex;
justify-content: space-between;
flex-direction: row;
padding-bottom: 12px;

`;




