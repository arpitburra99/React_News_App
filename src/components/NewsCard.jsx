import React from "react";
import defaultImage from "../assets/default.jpg";

const NewsCard = ({ news }) => {
  return (
    <div className="card mb-3 col-12">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={news.urlToImage ? news.urlToImage : defaultImage}
            className="img-fluid rounded-start"
            alt="..."
            style={{ height: "250px" }}
          />
        </div>
        <div className="col-md-8 p-3">
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.description}</p>
            <p className="card-text">
              <small className="text-body-secondary">{news.author}</small>
            </p>
            <a
              target="_blank"
              href={news.url}
              className="btn btn-success float-end"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
