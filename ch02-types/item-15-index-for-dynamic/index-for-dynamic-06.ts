function safeParseCSV(input: string): {[columnName: string]: string | undefined}[] {
    return parseCSV(input);
}