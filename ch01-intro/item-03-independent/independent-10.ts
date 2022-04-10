function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a, b) {
    return a + b;
}

const three = add(1, 2); // 타입이 number;
const twelve = add ('1', '2'); // 타입이 string