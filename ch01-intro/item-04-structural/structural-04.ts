function calculateLength1(v: Vector3D) {
    let length = 0;

    for (const axis of Object.keys(v)) {
        const coord = v[axis];
        length += Math.abs(coord);
    }

    return length;
}

const vec3D = { x: 3, y: 4, z: 1, address: '123 Broadway' };
console.log(calculateLength1(vec3D));