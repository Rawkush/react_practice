import React from "react";


const CommonDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img
          alt="avatar"
          src="https://www.w3schools.com/howto/img_avatar.png"
        />
      </a>
      <div className="content">
        <a href="/" className="author">
          Ankush
        </a>
        <div className="metadata">
          <span className="date">Today at 7:42</span>
        </div>
        <div className="text">noice blog</div>
      </div>
    </div>
  );
};

export default CommonDetail;