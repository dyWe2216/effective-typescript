type TFn = (x: number) => string;
interface TIn {
    (x: number): string;
}

const toStrT: TFn = x => '' + x; // 정상
const toStrI: TIn = x => '' + x; // 정상