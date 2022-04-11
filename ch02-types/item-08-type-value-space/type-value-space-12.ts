interface Person {
    first: string;
    last: string;
}

type PersonEl = Person['first' | 'last']; // 타입은 string
type Tuple = [string, number, Date];
type TupleEl = Tuple[number]; // 타입은 string | number | Date