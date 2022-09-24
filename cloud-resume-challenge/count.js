let url = new URL(
  "https://32dyhayxu7.execute-api.us-east-1.amazonaws.com/prod/increment"
);

(async () => {
  let response = await fetch(url);
  let responseText = await response.json();

  document.getElementById("count").innerHTML = responseText;
})();
