import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Blog() {
  const [blogs, setblog] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api")
      .then((response) => {
        setblog(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs", error);
      });
  }, []);

  return (
    <div>
      <h1>Blog From backend</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>
              <i>{blog.author} </i>
            </p>
            <p>{blog.tags}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
