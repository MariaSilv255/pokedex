import styled from "styled-components";


export const Description = styled.p`
font-size: ${({theme}) => theme.size.filterTitle};
font-weight: regular;
color:${({theme}) => theme.text.gray};
    
`;

export const Titulo2 = styled.h2`
font-size: ${({theme}) => theme.size.filterTitle};
font-weight: regular;
color:${({theme}) => theme.text.black};
    
`;
export const Titulo3 = styled.h3`
font-size: ${({theme}) => theme.size.pokemonNumber};
font-weight: regular;
color:${({theme}) => theme.text.black};
    
`;


