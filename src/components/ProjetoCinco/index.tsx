import Paragrafo from "../Paragrafo";
import Titulo from "../titulo";

import { Card, LinkBotao } from './styles'

const ProjetoCinco = () => (
    <Card>
        <Titulo>Projeto Lista de tarefas</Titulo>
        <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
        <LinkBotao> Vizualizar5 </LinkBotao>
    </Card>
)

export default ProjetoCinco
