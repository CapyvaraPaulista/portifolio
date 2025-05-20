import Paragrafo from "../Paragrafo";
import Titulo from "../titulo";

import { Card, LinkBotao } from './styles'

const ProjetoQuatro = () => (
    <Card>
        <Titulo>Projeto tabela IMC React + Vite</Titulo>
        <Paragrafo tipo="secundario">Lista com calculadora de IMC criada com React + Vite e com uma robusta estrutura de criação. </Paragrafo>
        <LinkBotao href="https://tabela-imc-react-opal.vercel.app/" target="_blank"> Tabela IMC React </LinkBotao>
    </Card>
)

export default ProjetoQuatro
