import React from "react";


const ListWithDifferentData = (props) => {
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
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">
            {props.date}
          </span>
        </div>
        <div className="text">noice blog</div>
      </div>
    </div>
  );
};

export default ListWithDifferentData;