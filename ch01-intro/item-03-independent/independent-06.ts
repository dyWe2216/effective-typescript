function asNumber(val: number | string) {
    return typeof(val) === 'string' ? Number(val) : val;
}