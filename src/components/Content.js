import React from "react";
import content from "./images/content.png"
import Table from "./Table";

const Content = () => {
  return (
    <div className="content">
      <span>Content</span>
      <img src={content} alt="content here" />
      <Table />
    </div>
  );
};

export default Content;
