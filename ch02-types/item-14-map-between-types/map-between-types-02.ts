const surfaceArea = (r, h) => 2 * Math.PI * r * (r + h);
const Volume = (r, h) => Math.PI * r * r * h;
for (const [r, h] of [[1, 1], [1, 2], [2, 1]]) {
    console.log(
        `Cylinder ${r} x ${h}`,
        `Surface area: ${surfaceArea(r, h)}`,
        `Volume: ${Volume(r, h)}`
    );
}