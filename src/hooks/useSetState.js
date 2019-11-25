import {useReducer} from 'react';

export const useSetState = nextState => {

    const reducer = (prevState, nextState) => ({...prevState, ...nextState});
    const [state, setState] = useReducer(reducer, nextState);

    return [
        state,
        setState
    ];
};
