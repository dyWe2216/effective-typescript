interface Person2 {
    name: string;
}
interface Lifespan2 {
    birth: Date;
    daeth?: Date;
}
type PersonSpan2 = Person2 & Lifespan2;
type K = keyof (Person1 | Lifespan2);