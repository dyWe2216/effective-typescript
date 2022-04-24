const xs = [1, 2, 3];
const x0 = xs[0];
const x1 = xs['1'];

function get<T>(array: T[], k: string): T {
    return array[k];
}