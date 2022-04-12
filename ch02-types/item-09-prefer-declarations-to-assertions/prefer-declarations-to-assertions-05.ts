interface Person { name: string };
const people = [ 'alice', 'bob', 'dywe'].map(name => ({ name } as Person));