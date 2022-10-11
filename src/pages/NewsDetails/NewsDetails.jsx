import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "../../components/News/Blog/Blog";
import { toast, Toaster } from "react-hot-toast";
import "./NewsDetails.css";
import { useNavigate } from "react-router-dom";
function NewsDetails() {
  const [news, setNews] = useState([]);
  const navigator = useNavigate();
  const [currentNews, setCurrentNews] = useState({});
  let id = useParams();
  useEffect(() => {
    axios.get("http://localhost:8080/news").then((res) => {
      setNews(res.data.data);
      setCurrentNews(res.data.data.find((x) => x._id == id.id));
    });
  }, []);
  const prevHandler = () => {
    let index = news.indexOf(currentNews);
    if (index == 0) {
      toast.error("Evvel news yoxdur");
      return;
    }
  };
  const nextHandler = () => {
    let index = news.indexOf(currentNews);
    let newIndex = index + 1;
    console.log(newIndex);
    console.log(news);
    const nextNews = news.splice(newIndex, 1)[0];
    console.log(nextNews._id);
    navigator(`/news/${nextNews._id}`);
  };

  return (
    <div className="cardDetail-comment">
      <Blog />
      <div className="cardDetail">
        {currentNews._id}
        <div className="cardDetail-Image-container">
          <img src={currentNews.newsimage} alt="img" />
        </div>
        <div className="cardDetail-content">
          <div className="cardDetail-title">
            <h5>{currentNews.title}</h5>
          </div>
          <div className="cardDetail-general">
            <div className="cardDetail-Date">
              <p>{currentNews.createdAt}</p>
            </div>
            <div className="cardDetail-By">
              <p>By Dawnthemes</p>
            </div>

            <div className="cardDetail-Categories">
              <p>Exhibitions</p>
            </div>
          </div>
          <hr />
          <div className="carddetail-Text">
            <p>{currentNews.description} </p>
          </div>

          <div className="socialmedia">
            <p>Share it</p>
            <a src="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a src="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a src="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <hr />

        <div className="previousNext">
          <div className="previousPost">
            <button className="previousPost-btn" onClick={prevHandler}>
              <p>previous post </p>
              <h5>NISI CRAS VEL APTENT DICTUM SEM SENECTUS VENENATIS</h5>
            </button>
          </div>
          <div className="nextPost">
            <button className="nextPost-btn" onClick={nextHandler}>
              <p>next post </p>
              <h5>NISI CRAS VEL APTENT DICTUM SEM SENECTUS VENENATIS</h5>
            </button>
          </div>
        </div>
        <hr />
        <div className="general-comments">
          <h5>Leave a reply</h5>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <p className="comment-form">
            <label>Comment *</label>
            <textarea
              required
              className="comments"
              name="comment"
              placeholder="Add a comment"
            ></textarea>
          </p>

          <p className="name-form">
            <label>Name *</label>
            <input required className="name" name="author" type="text" />
          </p>

          <p className="email-form">
            <label>Email *</label>
            <input required className="email" name="email" type="email" />
          </p>
          <p className="website-form">
            <label>Website *</label>
            <input required className="website" name="url" type="url" />
          </p>

          <p className="checkbos">
            <input required className="checkbox" type="checkbox" />
            <label>
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </p>
          <button className="btn-comment">Post Comment </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default NewsDetails;
