import styled from "styled-components";


export const CardType = styled.p`
    padding: 3px;
    border-radius: 5px;
    color: ${({ theme }) => theme.text.white};
    background-color: ${(prop) => prop.theme.types[prop.type]};
    
    
`
