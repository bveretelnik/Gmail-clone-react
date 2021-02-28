import { Button, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./SideBar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import SideBarOption from "./SideBarOption/SideBarOption";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LadelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../store/mailSlice";
import { db } from "../../firebase";

function SideBar() {
  const dispatch = useDispatch();
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  });
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SideBarOption
        Icon={InboxIcon}
        title="Inbox"
        number={emails.length}
        // selected={true}
      />
      <SideBarOption Icon={StarIcon} title="Starred" number={emails.length} />
      <SideBarOption
        Icon={AccessTimeIcon}
        title="Snoozed"
        number={emails.length}
      />
      <SideBarOption
        Icon={LadelImportantIcon}
        title="Important"
        number={emails.length}
      />
      <SideBarOption Icon={NearMeIcon} title="Sent" number={emails.length} />
      <SideBarOption Icon={NoteIcon} title="Drafts" number={emails.length} />
      <SideBarOption Icon={ExpandMoreIcon} title="More" />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
