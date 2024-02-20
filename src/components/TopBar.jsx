import React from "react";
import Profile from "../component/topbar/Profile";
import Status from "../component/topbar/Status";
import "../styles/topbar.css";

const TopBar = () => {
  return (
    <>
      <div className="topbar-container">
        <Profile />

        <div className="leftpart">
          <Status type={"matterstatus"} title={"Matter Status"} />
          <Status type={"loggedin"} title={"Total Time Logged"} />
        </div>
      </div>
    </>
  );
};

export default TopBar;
