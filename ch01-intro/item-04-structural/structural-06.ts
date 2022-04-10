class C {
    foo: string;
    constructor(foo: string) {
        console.log(foo);
        this.foo = foo;
    }
}

const c = new C('instance of C');
const d: C = { foo: 'object literal' }; // 정상
console.log(d);