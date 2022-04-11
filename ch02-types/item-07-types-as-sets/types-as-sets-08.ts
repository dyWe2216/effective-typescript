interface Person {
    name: string;
}
interface Lifespan {
    birth: Date;
    daeth?: Date;
}
type PersonSpan = Person & Lifespan;