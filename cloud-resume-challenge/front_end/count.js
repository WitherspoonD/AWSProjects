let url = new URL('https://fu3ei0clah.execute-api.us-east-1.amazonaws.com/prod');

async function fetchTest() {
    let response = await fetch(url);
    let responseText = await response.text();

    document.getElementById('count').innerHTML = responseText;
}

(async() => {
    await fetchTest();
})();