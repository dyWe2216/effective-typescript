type Pick<T, K> = {
    [k in K]: T[k]
}