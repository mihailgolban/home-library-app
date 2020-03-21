export const SET_THEME =  'APP/SET_THEME';
export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

export function getTheme() {
    let theme;
    const savedTheme = localStorage.getItem('theme');
    try {
        theme = savedTheme ? JSON.parse(savedTheme) : 'light';
    } catch (e) {
        theme = 'light';
    }

    return {
        type: SET_THEME,
        payload: theme
    }
}

export function changeTheme(theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
    return {
        type: SET_THEME,
        payload: theme
    }
}

