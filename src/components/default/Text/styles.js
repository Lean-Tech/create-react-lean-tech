import styled from 'styled-components'
import {FontFamily, FontStyle, FontWeight} from './../../../utils/fonts'

export const Paragraph = styled.h1`
    margin:0;
    font-family:${props=>FontFamily[props.fontFamily]};
    font-weight:${props=>FontWeight[props.fontWeight]};
    font-style:${props=>FontStyle[props.fontStyle]};
    font-size:${props=>props.fontSize};
    color:${props=>props.theme[props.fontColor]};
`