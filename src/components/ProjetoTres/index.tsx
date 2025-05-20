import Paragrafo from "../Paragrafo";
import Titulo from "../titulo";

import { Card, LinkBotao } from './styles'

const ProjetoTres = () => (
    <Card>
        <Titulo> Projeto Sorteador de Números </Titulo>
        <Paragrafo tipo="secundario"> Sorteador de números Construido com JavaScript e LESS, com gerenciamento utilizando GRUNT. </Paragrafo>
        <LinkBotao href="https://sorteadorgrunt-sigma-three.vercel.app/" target="_blank" > Sorteador de Números </LinkBotao>
    </Card>
)

export default ProjetoTres

