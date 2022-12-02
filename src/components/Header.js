import React from "react";
import metamask from "./images/MetaMask.png";
import profilePic from "./images/profilePic.png";

const Header = () => {
  return (
    <div className="header">
    {/* id section of metamask */}
      <div className="id">
        <img src={metamask} alt="metamask" />
        <span>0x0445.....3E0716</span>
      </div>
      
      {/* avatar and user name etc. */}
      <div className="avatar">
        <div className="name">Nobuhara</div>
        <div className="pp">
          <img src={profilePic} alt="profile pic" />
        </div>
        <div className="userName">@noburockshere</div>
      </div>
    </div>
  );
};

export default Header;
