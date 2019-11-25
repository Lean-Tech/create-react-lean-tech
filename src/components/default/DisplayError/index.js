import React from 'react';
import {ErrorContainer, ErrorTitle, ErrorMessage} from './styles'

export const DisplayError = ({error, errorInfo}) => {
    return (
        <ErrorContainer>
            <ErrorTitle>sorry something went wrong</ErrorTitle>
            <ErrorMessage>{error.toString()}</ErrorMessage>
        </ErrorContainer>
    )
};
