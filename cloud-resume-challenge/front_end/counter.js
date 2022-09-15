
//let url = new URL('https://32dyhayxu7.execute-api.us-east-1.amazonaws.com/prod/increment');

//async function fetchTest() {
  //  let response = await fetch(
    //    "https://32dyhayxu7.execute-api.us-east-1.amazonaws.com/prod/increment"
    //);
    //let responseText = await response.json();

    //document.getElementById('value').innerHTML = responseText;
    
//}

//(async() => {
//    await fetchTest();
//})();

const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch(
    "https://32dyhayxu7.execute-api.us-east-1.amazonaws.com/prod/increment"
  );
  let data = await response.json();
  counter.innerHTML = `You are the ${data}. visitor to my Cloud Resume Challenge site`;
}

updateCounter();