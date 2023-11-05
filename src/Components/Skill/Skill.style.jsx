import styled from "styled-components";

export const Contem = styled.div`
    width: 400px;
    background-color: #ddd;
    display: flex;
    flex-direction: row;
    
`;

export const Skill = styled.div`
  padding-top: 2px;
  padding-bottom: 2px;
  color: white;
  display: flex;

 `;

export const Item = styled(Skill)`
 
width: ${(prop) => prop.tamanho +"px"} ;
background-color: ${(prop) => prop.theme.backgroundTypes[prop.types]};
border-radius: 0px 3px 3px 0px;
`;


