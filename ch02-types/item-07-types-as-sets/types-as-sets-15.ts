function getKey1<K extends string>(val: any, key: K) {
// ...
}
getKey1({}, 'x');  // OK, 'x' extends string
getKey1({}, Math.random() < 0.5 ? 'a' : 'b');  // OK, 'a'|'b' extends string
getKey1({}, document.title);  // OK, string extends string
getKey1({}, 12);
        // ~~ Type '12' is not assignable to parameter of type 'string'