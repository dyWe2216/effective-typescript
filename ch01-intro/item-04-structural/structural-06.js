var C = /** @class */ (function () {
    function C(foo) {
        console.log(foo);
        this.foo = foo;
    }
    return C;
}());
var c = new C('instance of C');
var d = { foo: 'object literal' }; // 정상
console.log(d);
