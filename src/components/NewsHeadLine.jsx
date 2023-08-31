import React from "react";

const NewsHeadLine = () => {
  return (
    <div>
      <div className="mb-4">
        <span className="badge rounded-pill text-bg-secondary">Politics</span>
        <span className="badge rounded-pill text-bg-secondary mx-2">
          Business
        </span>
        <span className="badge rounded-pill text-bg-secondary">Tech</span>
        <span className="badge rounded-pill text-bg-secondary mx-2">
          Science
        </span>
        <span className="badge rounded-pill text-bg-secondary">Health</span>
        <span className="badge rounded-pill text-bg-secondary mx-2">
          Sports
        </span>
        <span className="badge rounded-pill text-bg-secondary">
          Entertainment
        </span>
      </div>
    </div>
  );
};

export default NewsHeadLine;
