import React from 'react';
/* Theme */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  green300, cyan700
} from 'material-ui/styles/colors';
/* Elements */
import FloatingActionButton from 'material-ui/FloatingActionButton';
/* Events (use instead of onClick) */
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green300,
  }
});

// Sources: http://www.material-ui.com/#/get-started/usage
export default React.createClass({
  handleClickTouch() {
    console.log(muiTheme.palette.primary1Color);
  },

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <h1 className="header">Count your count$ with us</h1>
          <FloatingActionButton label="Default" onTouchTap={this.handleClickTouch}>
            <div>+</div>
          </FloatingActionButton>
        </div>
      </MuiThemeProvider>
    );
  }
});
