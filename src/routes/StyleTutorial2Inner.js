import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { withStyles} from '@material-ui/styles';

const styles = theme =>({
  root: {
    background: theme.background,
    border: 0,
    borderRadius: 3,
    boxShadow: theme.boxShadow,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin : '10px'
  },
});
class StyleTutorial2 extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Button className={classes.root}>Button with Style</Button>
        <Button className={this.props.classes.root}>Button with Style</Button>
      </div>
    );
  }
}
export default  withStyles(styles)(StyleTutorial2);
