const keys = Object.keys(xs); // 타입이 string[]
for (const key in keys) {
    key; // 타입이 string;
    const x = xs[key]; // 타입이 number
}