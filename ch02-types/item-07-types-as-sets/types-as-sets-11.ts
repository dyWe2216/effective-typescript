interface Person3 {
    name: string;
}
interface PersonSpan3 extends Person3 {
    birth: Date;
    daeth?: Date;
}

const test: PersonSpan3 = {}