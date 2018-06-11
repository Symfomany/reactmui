import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import { withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    height: 180
  },
  paper: {
    margin: theme.spacing.unit
  },
  svg: {
    width: 100,
    height: 100
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
});

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { checked } = this.state;
    const { classes } = this.props;

    return (
      <div {...this.props}>
        <Switch
          checked={checked}
          onChange={this.handleChange}
          aria-label="Collapse"
        />
        <Grow in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon
                points="0,100 50,00, 100,100"
                className={classes.polygon}
              />
            </svg>
            <Typography>The content of the Popover.</Typography>
          </Paper>
        </Grow>
      </div>
    );
  }
}

export default withStyles(styles)(MyComponent);
