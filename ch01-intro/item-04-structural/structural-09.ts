test('getAuthors', () => {
    const authors = getAuthor({
        runQuery(sql: string) {
            return [['Toni', 'Morrison'], ['Maya', 'Angelou']];
        }
    });

    expect(authors).toEqual([
        { first: 'Toni', last: 'Morrison' },
        { first: 'Maya', last: 'Angelou' }
    ]);
});