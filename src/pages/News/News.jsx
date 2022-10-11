import React from "react";
import Blog from "../../components/News/Blog/Blog";
import NewsCards from "../../components/News/NewsCards/NewsCards";
import "./News.css";

function News() {
  return (
    <div>
      <Blog />
      <NewsCards />
    </div>
  );
}

export default News;
