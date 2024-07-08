  //if we have multiple requests we can never know which one would be executed 1st


//nesting
fetch("http://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));



fetch('http://jsonplaceholder.typicode.com/posts').then((data) => 
    {console.log(data.json())
}).then((finalresponse)=>{
    console.log(finalresponse)
}).catch ((err)=>{
    alert('erroooooooooooor')
    console.log(err)
})



fetch("http://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    return data.json();
  })
  .then((finalresponse) => {
    console.log(finalresponse);
    document.getElementById(
      "blogs"
    ).innerHTML += `<h3>${finalresponse[0].title}</h3>
    <p>${finalresponse[0].body}</p>`;
  });



fetch("http://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    return data.json();
  })
  .then((finalresponse) => {
    console.log(finalresponse);
    let blogContent = "";
    for (var i = 0; i < finalresponse.length; i++) {
      blogContent += `<h3>${finalresponse[i].title}</h3>
                      <p>${finalresponse[i].body}</p>`; 
    }
    document.getElementById("blogs").innerHTML = blogContent;
  })
  .catch((error) => {
    console.error("Error fetching posts:", error);
  });


//if we want to determine which one is done 1st 
//await : makes you wait until the line before is executed 
var data = await fetch("http://jsonplaceholder.typicode.com/posts")
var data1 = await fetch("http://jsonplaceholder.typicode.com/posts")
var data2 = await fetch("http://jsonplaceholder.typicode.com/posts")
