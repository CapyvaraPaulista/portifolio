import Paragrafo from "../Paragrafo";
import Titulo from "../titulo";

import { Card, LinkBotao } from './styles'

const ProjetoDois = () => (
    <Card>
        <Titulo>Projeto EBAC Tech Talks</Titulo>
        <Paragrafo tipo="secundario"> Pagina de evento ficticio sobre tecnologia, criado utilizando SCSS/SASS e JavaScript com a utilização de Parcel para gerenciamento. </Paragrafo>
        <LinkBotao href="https://ebac-tech-talks-snowy-one.vercel.app/" target="_blank" > EBAC Tech Talks </LinkBotao>
    </Card>
)

export default ProjetoDois
