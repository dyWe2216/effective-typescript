async function checkFetch(input: RequestInfo, init: RequestInit) {
    const response = await fetch(input, init);

    if (!response.ok) {
        throw new Error('Request failed: ' + response.status);
    }

    return response;
}