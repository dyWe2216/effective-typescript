class Cylinder {
    radius=1;
    height=1;
}

const v = typeof Cylinder; // 값이 function
type T = typeof Cylinder; // 타입이 Cylinder

declare let fn: T;
const c = new fn(); // 타입이 Cylinder