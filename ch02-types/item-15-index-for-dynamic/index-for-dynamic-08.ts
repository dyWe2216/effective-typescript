interface Row1 { [column: string]: number }; // 너무 광범위
interface Row2 { a: number, b?: number, c?: number, d?: number }; // 최선
type Row3 = 
    | { a: number; }
    | { a: number, b: number }
    | { a: number, b: number, c: number }
    | { a: number, b: number, c: number, d: number }; // 가장 정확하지만 사용하기 번거로움