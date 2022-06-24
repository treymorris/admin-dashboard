import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { mdiBellRing } from "@mdi/js";
import avatar1 from "./avatar1.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-top">
        <Icon
          path={mdiMagnify}
          title="search"
          size={1}
          color="black"
          className="search"
        />
        <input type="text" className="searchbar" id="searchbar" />
        <Icon path={mdiBellRing} title="home" size={1} color="black" className="notifications" />
        <img src={avatar1} alt="avatar" className="avatar-top" />
        <h2>Trey Morris</h2>
      </div>
      <div className="nav-bottom">
        <img src={avatar1} alt="avatar" className="avatar-bottom" />
        <h1>Trey Morris (@trey)</h1>
        <div className="btn-group" >
            <button className="navBtn">New</button>
            <button className="navBtn">Upload</button>
            <button className="navBtn">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
