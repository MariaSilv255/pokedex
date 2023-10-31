import { CardType } from "./CardType.style";
import { Container, Conteudo, Imagem, OrganizarType } from "./Card.style";


export default function Card({ id, name, types, url, marginCard}) {


    return (
// <Container types={types[0].type.name}> : types é minha prop quando chamar no style vai ficar [prop.types]
        <Container types={types[0].type.name} marginCard={marginCard}>

            <Conteudo>
                <p>{id}</p>
                <h3>{name}</h3>

                <OrganizarType key={id}>
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