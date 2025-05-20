import styled from 'styled-components'

import { ThemeLight } from '../../themes/Light'
import { ThemeDark } from '../../themes/Dark';

export const Card = styled.div`
    border: 1px solid ${(props) => (props.theme as ThemeLight).corBorda};
    padding: 16px;
`

export const LinkBotao = styled.a`
    color: ${(props) => (props.theme as ThemeLight).corDeFundo} ;
    font-size: 14px;
    background-color: ${(props) => (props.theme as ThemeLight).corFundoBotao};
    text-decoration: none;
    padding: 8px;
    display: inline-block;
    margin-top: 24px;
`
