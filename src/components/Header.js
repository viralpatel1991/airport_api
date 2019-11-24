import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
   
      <div className="ui two item menu">
        <NavLink exact  to="/" activeClassName="active" className="item">Home</NavLink>
        <NavLink to="/bookmarks" activeClassName="active" className="item">Bookmarks</NavLink>
      </div>
    
  );
};

export default Header;