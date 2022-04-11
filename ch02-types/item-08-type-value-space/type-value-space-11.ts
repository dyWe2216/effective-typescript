interface Person {
    first: string;
    last: string;
}

const first: Person['first'] = p['first'];
    // -----                    ---------- Values
    //        ------ ------- Types