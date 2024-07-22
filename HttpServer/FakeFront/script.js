function sendPost() {
  fetch("https://localhost:8000/items", {
    method: "POST",
    mode : "no-cors",
    body: JSON.stringify({
      name: "zahra_zellazi",
      body: 22,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
