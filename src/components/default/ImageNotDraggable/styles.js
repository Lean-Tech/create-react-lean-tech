import styled from 'styled-components'

export const Image = styled.img`
    user-select:none;
    width: ${props => props.width};
    height: ${props => props.height}
`