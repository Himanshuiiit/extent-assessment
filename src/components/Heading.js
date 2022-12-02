import React from "react";

const Heading = (props) => {
    const handleClick = () => {
        props.handelSelect(props.id);
    }
  return (
    <li className={props.isSelected?  "underline" : ""} onClick={handleClick}>
      <a href="#">{props.name}</a>
    </li>
  );
};

export default Heading;
