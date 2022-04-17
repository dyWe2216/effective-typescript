interface Options {
    title: string;
    darkMode?: boolean;
}
function createWindow(options: Options) {
    if (options.darkMode) {
        setDarkMode();
    }
    // ...
}
createWindow({
    title: 'Spider Solitaire',
    darkmode: true
})