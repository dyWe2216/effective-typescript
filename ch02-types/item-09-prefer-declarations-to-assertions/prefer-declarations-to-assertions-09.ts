interface Person { name: string };
const people: Person[] = ['alice', 'bob', 'dywe'].map((name): Person => ({ name }));