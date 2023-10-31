import { Titulo2 } from "../../css/Title.style";


export default function About({habitat, abilities, height, weight, baseExp, base, growthRate}) {
   
    const habilidade = () => {
        if (abilities[1]) {
            return abilities[0].ability.name + " | " + abilities[1].ability.name;
        }
        return abilities[0].ability.name;
    }

    return (
        <div>

            <table border="1">
                <tr>
                    <td>
                        <Titulo2>
                            Pokémon Data
                        </Titulo2>
                    </td>
                </tr>
                <tr>
                    <th>habitat</th>
                    <td>{habitat}</td>
                </tr>
                <tr>
                    <th>Height</th>
                    <td>{height}</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>{weight}</td>
                </tr>
                <tr>
                    <th>Abilities</th>
                    <td>{habilidade()}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>22</td>
                </tr>

                <tr>
                    <td>
                        <Titulo2>
                            Trainer
                        </Titulo2>
                    </td>
                </tr>
                <tr>
                    <th>Base exp</th>
                    <td>{baseExp}</td>
                </tr>
                <tr>
                    <th>Base happiness</th>
                    <td>{base}</td>
                </tr>
                <tr>
                    <th>Catch Rate</th>
                    <td>22</td>
                </tr>
                <tr>
                    <th>Growth Rate</th>
                    <td>{growthRate}</td>
                </tr>
            </table>
        </div>
    );
}