import Paragrafo from "../Paragrafo";
import Titulo from "../titulo";

import { Card, LinkBotao } from './styles'

const ProjetoCinco = () => (
    <Card>
        <Titulo>Projeto Lista de tarefas</Titulo>
        <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
        <LinkBotao href="https://to-do-list-tawny-psi-36.vercel.app/" target="_blank"> To-Do List </LinkBotao>
    </Card>
)

export default ProjetoCinco
