console.log("hello" === new String("hello"));
console.log(new String("hello") === new String("hello"));

var x = "hello";
x.language = 'English';
console.log(x);
console.log(x.language);

function getStringLen(foo: String) {
    return foo.length;
}

console.log(getStringLen('hello'));
console.log(getStringLen(new String('hello')));