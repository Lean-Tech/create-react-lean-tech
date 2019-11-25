import {loadStorage, saveStorage} from "../../tools/storage";

const DARK_THEME = {
    primaryColor: 'red',
    textColor:'white'
};

const LIGHT_THEME = {
    primaryColor: 'blue',
    textColor:'black'
};

const DEFAULT_THEME = {
    primaryColor: 'yellow',
    textColor:'black'
};

export const THEMES = {
    DARK_THEME,
    LIGHT_THEME,
    DEFAULT_THEME
};

export const getTheme = () => {

    const currentTheme = loadStorage('theme');

    if (!THEMES[currentTheme]) {
        saveStorage('DEFAULT_THEME','theme');
    }

    return THEMES[currentTheme || 'DEFAULT_THEME']
};

export const setTheme = theme => saveStorage(theme, 'theme');
