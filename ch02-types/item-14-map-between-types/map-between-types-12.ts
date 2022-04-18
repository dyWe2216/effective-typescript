type TopNavState = {
    [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k];
}