import React  from 'react'
import {Image} from './styles'
import {ImagesOrIcons} from './../../../assets/export'

//Please read the README.md file to see the details documentation

export const ImageNotDraggable = (props) => {
    return(
        <Image 
        className={props.className ? props.className : ''}
        src={props.externalImage ? props.externalImage : ImagesOrIcons[props.imageKey]} 
        alt={props.alt}
        draggable={false}
        {...props}
        />
    )
}

