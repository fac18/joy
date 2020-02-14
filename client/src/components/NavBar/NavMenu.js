import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TimelineIcon from "@material-ui/icons/Timeline";
import PersonIcon from "@material-ui/icons/Person";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});
// const classes = useStyles();
export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <Link to="/">
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText>Add New Service</ListItemText>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link to="/dashboard">
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link to="/clientProfile">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Register Client</ListItemText>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link to="/searchClient">
            <ListItemIcon>
              <FindInPageIcon />
            </ListItemIcon>
            <ListItemText>Search Client</ListItemText>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link to="/">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
