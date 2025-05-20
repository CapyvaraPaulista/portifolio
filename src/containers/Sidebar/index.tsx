import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/titulo"

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
    trocaTema: () => void;
}

const Sidebar = (props: Props) => (
    <aside>
        <SidebarContainer>
            <Avatar />
            <Titulo fontSize={20}>Victor Bonini</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}>CapyvaraPaulista</Paragrafo>
            <Descricao tipo="principal" fontSize={12}> Engenheiro Front-end</Descricao>
            <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
        </SidebarContainer>
    </aside>
)

export default Sidebar
