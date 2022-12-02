import React from "react";
import "../index.css";

const ListItem = (props) => {
  const handleClick = () => {
    props.onClick(props.id);
  };
  return (
    <li onClick={handleClick}>
      <a href="#">
        {props.isSelected && <span className="selected"></span>}
        <img src={props.image} alt={props.tag + " icon"} />
        {props.tag}
      </a>
    </li>
  );
};

export default ListItem;
