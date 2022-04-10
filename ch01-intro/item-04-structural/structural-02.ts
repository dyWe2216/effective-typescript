interface Vector3D {
    x: number;
    y: number;
    z: number;
}

function normalize(v: Vector3D) {
    const length = calculateLength(v);

    return {
        x: v.x,
        y: v.y,
        z: v.z,
    }
}

console.log(normalize({x: 3, y: 4, z: 5}));