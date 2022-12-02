import React from "react";
import Line from "./Line";
import preview from "./images/preview.png";

const TableContent = (props) => {
  return (
    <div>
      <div className="table-content">
        <div className="video-content">
          <img src={props.image} alt="thumbnail" />
          <span className="video-info">{props.title}</span>
          <span className="video-length">{props.timeStamp}</span>
          <span className="video-description">
            Some importent fact that matter
          </span>
        </div>
        <div className="date">{props.date}</div>
        <div className="views">{props.views}</div>
        <div className="comments">{props.comments}</div>
        <div className="likes">{props.likes}</div>
        <div className="preview">
          <img src={preview} alt="preview" />
          Preview
        </div>
      </div>
      <Line />
    </div>
  );
};

export default TableContent;
