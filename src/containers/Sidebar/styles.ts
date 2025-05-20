import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";

import { ThemeLight } from "../../themes/Light";
import { ThemeDark } from '../../themes/Dark';

export const Descricao = styled(P)`
    margin-top: 24px;
    margin-bottom: 40px;
`
export const BotaoTema = styled.button`
    border-radius: 12px;
    padding: 8px;
    color: ${(props) => (props.theme as ThemeLight).corDeFundo};
    font-size: 10px;
    font-weight: bold;
    background-color: ${(props) => (props.theme as ThemeLight).corPrincipal};
    cursor: pointer;
`
export const SidebarContainer = styled.div`
    position: sticky;
    top: 80px;
    left: 0;

    @media (max-width: 768px) {
        margin-bottom: 40px;
        text-align: center;
    }
`
