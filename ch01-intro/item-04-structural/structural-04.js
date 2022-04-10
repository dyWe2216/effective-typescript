function calculateLength1(v) {
    var length = 0;
    for (var _i = 0, _a = Object.keys(v); _i < _a.length; _i++) {
        var axis = _a[_i];
        var coord = v[axis];
        length += Math.abs(coord);
    }
    return length;
}
var vec3D = { x: 3, y: 4, z: 1, address: '123 Broadway' };
console.log(calculateLength1(vec3D));
