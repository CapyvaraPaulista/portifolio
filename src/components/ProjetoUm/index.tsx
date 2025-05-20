import Paragrafo from "../Paragrafo";
import Titulo from "../titulo";

import { Card, LinkBotao } from './styles'

const ProjetoUm = () => (
    <Card>
        <Titulo>Projeto Landing Page Japan House</Titulo>
        <Paragrafo tipo="secundario">Landing Page de um restaurante com construção simples e objetiva onde foi feita a utilização de Bootstrap.</Paragrafo>
        <LinkBotao href="https://japanhouse.vercel.app/" target="_blank" > Japan House </LinkBotao>
    </Card>
)

export default ProjetoUm
