import React from 'react'
import {Paragraph} from './styles'
import {ArrayString} from './../../../tools/keys'
import {withChangeTheme} from './../../../HOC/withChangeTheme'

//Please read the README.md file to see the details documentation

export const TextComponent = (props) => {

    ArrayString(props.contentKey, props.content, props.avoid)

    return (
       <Paragraph 
       className={props.className ? props.className : ''}
       title={props.title ? props.title : props.content} 
       {...props}>
           {props.content}
       </Paragraph>
    )
}

export const Text = withChangeTheme(TextComponent)
