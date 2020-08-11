import React from "react";
import "./Header.css";
import SeacrhIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <SeacrhIcon />
        <input placeholder="Seacrh for Artists, Song, or Albums" type="text" />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="FM" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;