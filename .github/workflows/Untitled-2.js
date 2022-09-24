
let url = new URL('https://32dyhayxu7.execute-api.us-east-1.amazonaws.com/prod/increment');

async function fetchTest() {
    let response = await fetch(url);
    let responseText = await response.json();

    document.getElementById('value').innerHTML = responseText;
    
}

(async() => {
    await fetchTest();
})();
