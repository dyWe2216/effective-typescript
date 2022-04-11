class Cylinder {
    radius=1;
    height=1;
}

function calculateVolume(shape: unknown) {
    if (shape instanceof Cylinder) {
        shape  // OK, type is Cylinder
        shape.radius  // OK, type is number
    }
}