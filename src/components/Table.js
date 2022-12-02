import React, { useState } from "react";
import Heading from "./Heading";
import Line from "./Line";
import TableContent from "./TableContent";
import data from "../data";

const Table = () => {
  const headings = ["Videos", "Music", "Pictures"];
  const [selected, setSelected] = useState([true, false, false]);
  const handelSelect = (id) => {
    const newSelected = [false, false, false];
    newSelected[id] = true;
    setSelected(newSelected);
  };
  return (
    <div className="table">
      {/* heading options to select from */}
      <ul className="heading-tags">
        {headings.map((heading, index) => {
          return (
            <Heading
              key={index}
              id={index}
              name={heading}
              isSelected={selected[index]}
              handelSelect={handelSelect}
            />
          );
        })}
      </ul>
      {/* table heading for the content */}
      <ul className="list-tags">
        <li>Video</li>
        <li>Date</li>
        <li>Views</li>
        <li>Comments</li>
        <li>Likes</li>
        <li>Preview</li>
      </ul>
      <Line /> {/*Hortizontal line*/}
      {/* table content */}
      {data.map((item, index) => {
        return (
          <TableContent
            image={item.image}
            timeStamp={item.timeStamp}
            title={item.title}
            date={item.date}
            views={item.views}
            comments={item.comments}
            likes={item.likes}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Table;
