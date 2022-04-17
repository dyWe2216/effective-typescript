const checkFetch: typeof fetch = async (input, init) => {
    const response = await fetch(input, init);

    if (!response.ok) {
        return new Error('Request failed: ' + response.status);
    }

    return response;
}