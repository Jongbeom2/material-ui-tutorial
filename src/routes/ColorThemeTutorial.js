import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
const ColorThemeTutorial = () => {
  const useStyles = makeStyles(theme =>
    createStyles({
      root: {
        height: '100%',
        background: theme.palette.background.default
      },
      menuIconButton: {
        marginRight: theme.spacing(2),
      },
      menuTitle: {
        flexGrow: 5,
      },
      menuButton: {
        marginRight: theme.spacing(2),
        flexGrow: 1,
        display: 'flex'
      },
    }),
  );
  const blueTheme = createMuiTheme({
    palette: {
      primary: blue,
    },
  });
  const redTheme = createMuiTheme({
    palette: {
      primary: red,
    },
  });
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#202020',
      },
    },
  });
  const classes = useStyles();
  const [theme, setTheme] = useState(blueTheme);
  const handleClick = (e,value) => {
    if (value === 'blue') {
      setTheme(blueTheme);
    } else if (value === 'red') {
      setTheme(redTheme);
    } else if (value === 'dark') {
      setTheme(darkTheme);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuIconButton} color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.menuTitle}>
              News
          </Typography>
            <div className={classes.menuButton}>
              <Button color="inherit" onClick={(e) => {handleClick(e,'blue')}}>Blue</Button>
              <Button color="inherit" onClick={(e) => {handleClick(e,'red')}}>Red</Button>
              <Button color="inherit" onClick={(e) => {handleClick(e,'dark')}}>Dark</Button>
            </div>
          </Toolbar>
        </AppBar>
        <ColorThemeTutorialContent />
      </div>
    </ThemeProvider>
  );
}

const ColorThemeTutorialContent = () => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        height: '100%',
        background: theme.palette.background.default,
        padding: theme.spacing(2)
      },
      contentButtonMain: {
        background: theme.palette.primary.main,
        color: theme.palette.text.primary
      },
      contentButtonDark: {
        background: theme.palette.primary.dark,
        color: theme.palette.text.primary
      },
      contentButtonLight: {
        background: theme.palette.primary.light,
        color: theme.palette.text.primary
      },
      contentTitle1: {
        color: theme.palette.text.primary
      },
      contentTitle2:{
        color: theme.palette.text.secondary
      }
    }),
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button className={classes.contentButtonDark} variant="contained">Button</Button>
      <Button className={classes.contentButtonMain} variant="contained">Button</Button>
      <Button className={classes.contentButtonLight} variant="contained">Button</Button>
      <Typography variant="h6" className={classes.contentTitle1}>Typography</Typography>
      <Typography variant="h6" className={classes.contentTitle2}>Typography</Typography>
    </div>
  )
}

export default ColorThemeTutorial;
