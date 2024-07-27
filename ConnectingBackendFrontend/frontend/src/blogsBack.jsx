import axios from "axios";
import { useEffect, useState } from "react";
import "./blogs.css";

function BlogsBack() {
  const [listOfBlogs, setListOfBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getAllBlogs();
  }, []);

  function getAllBlogs() {
    axios
      .get("http://localhost:3737/blogs")
      .then(({ data }) => {
        console.log(data);
        setListOfBlogs(data);
      })
      .catch((error) => {
        setError("Error fetching blogs");
        console.error("Error fetching blogs:", error);
      });
  }

  function addBlog() {
    axios
      .post("http://localhost:3737/blogs", { title, text, imgUrl })
      .then(({ data }) => {
        getAllBlogs();
        setTitle("");
        setText("");
        setImgUrl("");
      })
      .catch((error) => {
        setError("Error adding blog");
        console.error("Error adding blog:", error);
      });
  }

  function deleteBlog(id) {
    console.log(id);
    axios
      .delete(`http://localhost:3737/blogs/${id}`)
      .then(() => {
        getAllBlogs();
      })
      .catch((error) => {
        setError("Error deleting blog");
        console.error("Error deleting blog:", error);
      });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <button onClick={addBlog}>Add Blog</button>

      {error && <p className="error">{error}</p>}

      {listOfBlogs.map((e, i) => (
        <div className="card" key={i}>
          <img src={e.imgUrl} alt={e.title} />
          <h3>{e.title}</h3>
          <p>{e.text}</p>
          <button onClick={() => deleteBlog(e._id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
}

export default BlogsBack;
