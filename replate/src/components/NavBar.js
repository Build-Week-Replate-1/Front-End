import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#01FF70",
    fontFamily: "Bebas Neue",
    fontSize: "3em"
  },
  navButtons: {
    color: "#01FF70",
    fontFamily: "Bebas Neue",
    fontSize: "2em",
    marginLeft: "10px",
    marginRight: "10px"
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color='inherit'>
        <Toolbar>
          {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
          {/*    <MenuIcon/>*/}
          {/*</IconButton>*/}
          <Typography variant="h6" className={classes.title}>
            REPLATE
          </Typography>
          <Button className={classes.navButtons}>About</Button>
          <Button className={classes.navButtons} href='/login'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
