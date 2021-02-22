import { Button } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
import AddIcon from "@material-ui/icons/Add";

function SideBar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="lagre" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
    </div>
  );
}

export default SideBar;
