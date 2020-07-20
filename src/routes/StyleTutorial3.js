import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f44336'
    },
    secondary: {
      main: '#3f51b5'
    },
    error: {
      main: '#009688'
    },
    text: {
      primary: '#e91e63',
      secondary: '#2196f3',
      disabled: '#4caf50',
      hint: '#ffc107',
      myTextColor : '#039be5'
    }
  },
})
class StyleTutorial3 extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box bgcolor="primary.main" p={2} m={1}>primary.main</Box>
        <Box bgcolor="primary.light" color="primary.contrastText"p={2} m={1}>primary.light</Box>
        <Box bgcolor="primary.dark" color="primary.contrastText"p={2} m={1}>primary.dark</Box>
        <Box bgcolor="secondary.main" p={2} m={1}>secondary.main</Box>
        <Box bgcolor="secondary.light" color="secondary.contrastText"p={2} m={1}>secondary.light</Box>
        <Box bgcolor="secondary.dark" color="secondary.contrastText"p={2} m={1}>secondary.dark</Box>
        <Box bgcolor="error.main" p={2} m={1}>error.main</Box>
        <Box bgcolor="error.light" color="error.contrastText"p={2} m={1}>error.light</Box>
        <Box bgcolor="error.dark" color="error.contrastText"p={2} m={1}>error.dark</Box>
        <Box bgcolor="text.primary" p={2} m={1}>text.primary</Box>
        <Box bgcolor="text.secondary" p={2} m={1}>text.secondary</Box>
        <Box bgcolor="text.disabled" p={2} m={1}>text.disabled</Box>
        <Box bgcolor="text.hint" p={2} m={1}>text.hint</Box>
        <Box bgcolor="text.myTextColor" p={2} m={1}>text.myTextColor</Box>
      </ThemeProvider>
    );
  }
}
export default StyleTutorial3;
