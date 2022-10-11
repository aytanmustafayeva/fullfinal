import React from "react";
import "./NewsCard.css";
import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  console.log(item);
  return (
    <Link to={`/news/${item._id}`} className="linkcard">
      <div className="card">
        <div className="image-container">
          {/* <img src={item.thumbnail} alt="" /> */}
        </div>
        <div className="card-content">
          <div className="card-title">
            <h5>{item.title}</h5>
          </div>

          <div className="date">
            <p>{item.date}</p>
          </div>

          <div className="text">
            <p>{item.description}</p>
          </div>
        </div>
        <div className="btn">
          <button>
            <a>READ MORE</a>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
