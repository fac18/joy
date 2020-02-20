import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
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
  },
  link: {
    textDecoration: "none",
    color: "black"
  }
});

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
      {/* <List>
        <Link className={classes.link} to="/">
          <ListItem>
            <ListItemIcon>
              <FavoriteBorderIcon color="primary" />
            </ListItemIcon>
            <ListItemText>Add New Service</ListItemText>
          </ListItem>
        </Link>
      </List> */}
      <Divider />
      <List>
        <Link className={classes.link} to="/dashboard">
          <ListItem>
            <ListItemIcon>
              <TimelineIcon color="primary" />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.link} to="/registerClient">
          <ListItem>
            <ListItemIcon>
              <PersonIcon color="primary" />
            </ListItemIcon>
            <ListItemText>Register Client</ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.link} to="/searchClient">
          <ListItem>
            <ListItemIcon>
              <FindInPageIcon color="primary" />
            </ListItemIcon>
            <ListItemText>Search Client</ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.link} to="/">
          <ListItem>
            <ListItemIcon>
              <ExitToAppIcon color="primary" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon color="primary" />
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
