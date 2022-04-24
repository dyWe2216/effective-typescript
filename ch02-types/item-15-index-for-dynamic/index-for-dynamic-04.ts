function parseCSV(input: string): {[columnName: string]: string}[] {
    const lines = input.split('\n');
    const [header, ...rows] = lines;
    const headerColumns = header.split(',');

    return rows.map(rowStr => {
        const row: {[columnName: string]: string} = {}
        rowStr.split(',').forEach((cell, i) => {
            row[headerColumns[i]] = cell;
        });

        return row;
    })
}