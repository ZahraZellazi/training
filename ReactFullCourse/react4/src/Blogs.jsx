import axios from "axios";
import { useState, useEffect } from "react";

function Blogs() {
  const [blogsList, setBlogsList] = useState([]);
  const [todossList, setTodossList] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    getTodoss();
  }, []);

  function getBlogs() {
    axios.get("http://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        setBlogsList(data);
      });
  }
  //Creating a source 
  /*
  function createTodo() {

    axios.post("https://jsonplaceholder.typicode.com/posts" , {
        title: "foo",
        body: "bar",
        userId: 1,
    }).then(({data})=>{
        console.log(data)
    })
    /*fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }*/
  


  return (
    <div>
      {/* <button
        onClick={() => {
          getdata();
        }}
      >
        Get the data from the API
      </button>
      */}

      {blogsList.map((blog, i) => {
        return (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
          </div>
        );
      })}

      {todossList.map((todo, i) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.completed ? "Completed" : "Not completed"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
