function calculateLength1(v: Vector3D) {
    let length = 0;

    for (const axis of Object.keys(v)) {
        const coord = v[axis];
        length += Math.abs(coord);
    }

    return length;
}