import React, { Component } from 'react';
import StyleTutorial2Inner from './StyleTutorial2Inner';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
})
class StyleTutorial2 extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} style ={{padding:'20px'}}>
        <StyleTutorial2Inner/>
      </ThemeProvider>
    );
  } 
}
export default StyleTutorial2;

