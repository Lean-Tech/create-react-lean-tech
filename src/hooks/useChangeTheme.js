import {useState} from 'react';
import {getTheme, setTheme} from "../utils/colors";

export const useChangeTheme = () => {
    const [theme, setChangeTheme] = useState(getTheme());

    const handleChangeTheme = theme => {
        setTheme(theme);
        setChangeTheme(getTheme());
    };

    return [
        theme,
        handleChangeTheme
    ]

};
