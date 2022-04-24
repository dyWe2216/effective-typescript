const rows = parseCSV(csvData);
const prices: {[product: string]: number} = {};
for (const row of rows) {
    prices[row.productId] = Number(row.price);
}

const safeRows = safeParseCSV(csvData);
for (const row of safeRows) {
    prices[row.productId] = Number(row.price);
    // ~~~ 'undefined' 형식을 인덱스 형식으로 사용할 수 없습니다.
}