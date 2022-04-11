interface Person1 {
    name: string;
}
interface Lifespan1 {
    birth: Date;
    daeth?: Date;
}
type PersonSpan1 = Person1 & Lifespan1;
const ps: PersonSpan1 = {
    name: 'daeyoung we',
    birth: new Date('1991/01/01'),
    daeth: new Date('2099/12/31')
}