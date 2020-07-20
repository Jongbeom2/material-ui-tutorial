import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3),
    },
  }));
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant ="h3" gutterBottom>Material UI Tutorial</Typography>
      <List component="nav">
        <Link href="/">
          <ListItem button divider >
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/colorTheme">
          <ListItem button divider >
            <ListItemText primary="Color Theme Tutorial" />
          </ListItem>
        </Link>
        <Link href="/stepper">
          <ListItem button divider >
            <ListItemText primary="Stepper Tutorial" />
          </ListItem>
        </Link>
        <Link href="/icon">
          <ListItem button divider >
            <ListItemText primary="Icon Tutorial" />
          </ListItem>
        </Link>
        <Link href="/tab">
          <ListItem button divider >
            <ListItemText primary="Tab Tutorial" />
          </ListItem>
        </Link>
        <Link href="/grid1">
          <ListItem button divider >
            <ListItemText primary="Grid Tutorial 1" />
          </ListItem>
        </Link>
        <Link href="/grid2">
          <ListItem button divider >
            <ListItemText primary="Grid Tutorial 2" />
          </ListItem>
        </Link>
        <Link href="/style1">
          <ListItem button divider >
            <ListItemText primary="Style Tutorial 1" />
          </ListItem>
        </Link>
        <Link href="/style2">
          <ListItem button divider >
            <ListItemText primary="Style Tutorial 2" />
          </ListItem>
        </Link>
        <Link href="/style3">
          <ListItem button divider >
            <ListItemText primary="Style Tutorial 3" />
          </ListItem>
        </Link>
        <Link href="/box">
          <ListItem button divider >
            <ListItemText primary="Box Tutorial" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}

export default Home;
