import Icon from "@mdi/react";
import { mdiNewspaperVariant } from "@mdi/js";
import { mdiHome } from "@mdi/js";
import { mdiBadgeAccountHorizontal } from "@mdi/js";
import { mdiAndroidMessages } from "@mdi/js";
import { mdiHistory } from "@mdi/js";
import { mdiNoteMultiple } from "@mdi/js";
import { mdiAccountGroup } from "@mdi/js";
import { mdiCog } from "@mdi/js";
import { mdiHelpBox } from "@mdi/js";
import { mdiShieldLock } from "@mdi/js";

function Sidenav() {
  return (
    <div className="col sidenav">
      <div className="box dashboard">
        <Icon
          path={mdiNewspaperVariant}
          title="dashboard"
          size={3}
          color="white"
        />
        <h1>Dashboard</h1>
      </div>
      <div className="box home">
        <Icon path={mdiHome} title="home" size={1} color="white" />
        <h2>Home</h2>
      </div>
      <div className="box profile">
        <Icon
          path={mdiBadgeAccountHorizontal}
          title="profile"
          size={1}
          color="white"
        />
        <h2>Profile</h2>
      </div>
      <div className="box messages">
        <Icon
          path={mdiAndroidMessages}
          title="messages"
          size={1}
          color="white"
        />
        <h2>Messages</h2>
      </div>
      <div className="box history">
        <Icon path={mdiHistory} title="history" size={1} color="white" />
        <h2>History</h2>
      </div>
      <div className="box tasks">
        <Icon path={mdiNoteMultiple} title="tasks" size={1} color="aliceblue" />
        <h2>Tasks</h2>
      </div>
      <div className="box communities">
        <Icon
          path={mdiAccountGroup}
          title="communities"
          size={1}
          color="white"
        />
        <h2>Communities</h2>
      </div>
      <div className="box settings">
        <Icon path={mdiCog} title="settings" size={1} color="white" />
        <h2>Settings</h2>
      </div>
      <div className="box support">
        <Icon path={mdiHelpBox} title="support" size={1} color="white" />
        <h2>Support</h2>
      </div>
      <div className="box privacy">
        <Icon path={mdiShieldLock} title="privacy" size={1} color="white" />
        <h2>Privacy</h2>
      </div>
    </div>
  );
}

export default Sidenav;
