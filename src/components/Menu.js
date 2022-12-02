import React, { useState } from "react";
import "../index.css";
import dashboard from "./images/Vector.png";
import content from "./images/book.png";
import analytics from "./images/analytic.png";
import profile from "./images/person.png";
import ListItem from "./ListItem";

const Menu = () => {
  const items = [
    { name: "Dashboard", image: dashboard },
    { name: "Content", image: content },
    { name: "Drafts", image: content },
    { name: "Analytics", image: analytics },
    { name: "Profile", image: profile },
  ];

  const [selected, setSelected] = useState([false, true, false, false, false]);

  const clicked = (id) => {
    const updatedSelected = selected.map((item, index) => {
      if (id === index) {
        item = true;
      } else {
        item = false;
      }
      return item;
    });
    setSelected(updatedSelected);
  };

  return (
    <div>
      <ul className="menu">
        {items.map((item, index) => {
          return (
            <ListItem
              key={index}
              id={index}
              isSelected={selected[index]}
              tag={item.name}
              image={item.image}
              onClick={clicked}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
