import styled from "styled-components";

export const Table = styled.table`
    border: 0px;
    display: flex;
    flex-direction:column;
    gap: 10px;

`;

export const Linha = styled.tr`
  
   
    
    `;

export const Coluna = styled.td`
    font-weight: ${(prop) => prop.bold ? prop.bold : 'normal'};
    width: 180px;
    color: ${(prop) => prop.color ? prop.theme.text.gray : 'black'};
    text-transform: capitalize;
  
`;