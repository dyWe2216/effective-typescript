function checkedAccess<T>(xs: ArrayLike<T>, i: number):T {
    if (i < xs.length) {
        return xs[i];
    }
    throw new Error(`배열의 끝을 지나서 ${i}에 접근하려고 했습니다.`);
}