export function getTheme() {
    let theme = localStorage.getItem('theme');
    return theme ? JSON.parse(theme) : 'light';
}

export function saveTheme(theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
}
