import React from 'react';
/* Theme */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  green300, green800,
  yellow600
} from 'material-ui/styles/colors';
/* Elements */
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
/* Custom Elements */
import CountsList from './CountsList/CountsList.jsx';
/* Events (use instead of onClick) */
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green300,
  }
});

// Logic sample: https://github.com/TeplyyMaksim/react-test-2/blob/master/note-app/notes.js
// Design (LAST PRIORITY): http://www.material-ui.com/#/get-started/usage
// Copy button and grid like here (NOTE: AFTER LOGIC!!!): https://docs.google.com/document/u/0/
// Icons list (THE LASTEST PRIORITY): https://material.io/icons/

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
          <div className="content-wrapper">
            <Paper zDepth={2}>
              <header>
                Count your <span>count<FontIcon className="material-icons" color={yellow600}>monetization_on</FontIcon></span> with us
              </header>
            </Paper>

            <main>
              <CountsList>Hello</CountsList>
              <FloatingActionButton onTouchTap={this.addCount}>
                <div>+</div>
              </FloatingActionButton>
              <FloatingActionButton onTouchTap={this.debugerClick}>
                <div>D</div>
              </FloatingActionButton>
            </main>
            <Paper zDepth={2}>
              <footer>Copyright (c) 2017 Teplyy Maksim All Rights Reserved.</footer>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
});
