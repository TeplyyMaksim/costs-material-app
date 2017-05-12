import React from 'react';
/* Theme */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  green300, green800
} from 'material-ui/styles/colors';
/* Elements */
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Paper from 'material-ui/Paper';
/* Events (use instead of onClick) */
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green300,
  }
});

// Sources: http://www.material-ui.com/#/get-started/usage
// Sources 2: https://github.com/TeplyyMaksim/react-test-2/blob/master/note-app/notes.js

export default React.createClass({
  getInitialState: function () {
    return {
      counts: [],
      displayedCounts: [],
      newCount: {}
    };
  },

  addCount() {
    const counts = this.state.counts.slice(),
      newCount = this.state.newCount;
    counts.unshift(newCount);
    this.setState({
      counts
    });
  },

  debugerClick() {
    console.log(this.state.counts);
  },

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <Paper zDepth={2}>
            <header>Count your count$ with us</header>
          </Paper>

          <main>
            <ul className="counts-list">

            </ul>
            <FloatingActionButton onTouchTap={this.addCount}>
              <div>+</div>
            </FloatingActionButton>
            <FloatingActionButton onTouchTap={this.debugerClick}>
              <div>D</div>
            </FloatingActionButton>
          </main>

          <Paper zDepth={2}>
            <footer>Count your count$ with us</footer>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
});
