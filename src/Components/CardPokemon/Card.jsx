import { CardType } from "./CardType.style";
import { Container, Conteudo, Imagem, OrganizarType } from "./Card.style";
import { Titulo1, Titulo3 } from "../../css/Title.style";


export default function Card({ id, name, types, url, marginCard,tamanho}) {

   
    return (
        // <Container types={types[0].type.name}> : types é minha prop quando chamar no style vai ficar [prop.types]
        <Container types={types[0].type.name} marginCard={marginCard}>

            <Conteudo>
           <Titulo3>{id}</Titulo3>
                <Titulo1>{name}</Titulo1>

                <OrganizarType key={id}>
                    {types.map((type) => (
                        <CardType type={type.type.name}>{type.type.name}</CardType>
                    ))}

                </OrganizarType>
            </Conteudo>

            <Imagem>
                <img width={tamanho} src={url} title={name} alt="Representação do pokemon" />
            </Imagem>

        </Container>


    );
}