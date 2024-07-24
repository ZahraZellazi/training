function sendPost() {
    fetch("http://localhost:3636/items", {  
        method: "POST",
        body: JSON.stringify({
            name: "zahra_zellazi",
            age: 22,  
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",  
        },
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((json) => console.log(json))
    .catch((error) => console.error('There was a problem with your fetch operation:', error));
}
