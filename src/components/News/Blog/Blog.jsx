import React from "react";
import "./Blog.css";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";
function Blog() {
  return (
    <div className="Blog">
      <h1>Blog</h1>
      <a>
        <IoHomeOutline /> Home <AiOutlineRight />
      </a>
    </div>
  );
}

export default Blog;
