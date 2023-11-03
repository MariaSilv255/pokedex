import { Description, Titulo2 } from "../../css/Title.style";
import { Coluna, Table } from "../table/table.style";


export default function About({ habitat, abilities, height, weight, baseExp, base, growthRate, captureRate, info }) {

    const habilidade = () => {
        if (abilities[1]) {
            return abilities[0].ability.name + " | " + abilities[1].ability.name;
        }
        return abilities[0].ability.name;
    }

    return (
        <div>

            <Table >
                <Description>
                    {info}
                </Description>
                <tr>
                    <Coluna>
                        <Titulo2>
                            Pokémon Data
                        </Titulo2>
                    </Coluna>
                </tr>
                <tr>
                    <Coluna bold='bold'>habitat</Coluna>
                    <Coluna color >{habitat}</Coluna>
                </tr>
                <tr>
                    <Coluna bold='bold'>Height</Coluna>
                    <Coluna color>{height}</Coluna>
                </tr>
                <tr>
                    <Coluna bold='bold'>Weight</Coluna>
                    <Coluna color>{weight}</Coluna>
                </tr>
                <tr>
                    <Coluna bold='bold'>Abilities</Coluna>
                    <Coluna color>{habilidade()}</Coluna>
                </tr>
                <tr>
                    <Coluna bold='bold'>Gender</Coluna>
                    <Coluna color>22</Coluna>
                </tr>

                <tr>
                    <Coluna>
                        <Titulo2>
                            Trainer
                        </Titulo2>
                    </Coluna>
                </tr>
                <tr>
                    <Coluna bold='bold'>Base exp</Coluna>
                    <Coluna color>{baseExp}</Coluna>
                </tr>
                <tr>
                    <Coluna bold='bold'>Base happiness</Coluna>
                    <Coluna color>{base}</Coluna>
                </tr>
                <tr>
                    <Coluna bold='bold'>Catch Rate</Coluna>
                    <Coluna color >{captureRate}</Coluna>
                </tr>
                <tr>
                    <Coluna bold='bold'>Growth Rate</Coluna>
                    <Coluna color>{growthRate}</Coluna>
                </tr>
            </Table>
        </div>
    );
}