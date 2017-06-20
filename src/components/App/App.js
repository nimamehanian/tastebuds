import React, { Component } from 'react';
import Header from '../Header';
import Group from '../Group';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.gather = this.gather.bind(this);
  }

  gather() {
    this.props.gather(this.props.teams);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="groups">
          {this.props.lunchGroups.map((group, index) => (
            <Group group={group} key={`group_${index + 1}`} />
          ))}
        </div>
        <div className="feather-btm" />
        <button
          disabled={this.props.groupsAreResolved}
          className="gather"
          onClick={this.gather}
          style={{
            cursor: this.props.groupsAreResolved ? 'not-allowed' : 'pointer',
            opacity: this.props.groupsAreResolved ? 0.5 : 1,
            transition: 'opacity 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)',
          }}
        >
          <span className="left" role="img" aria-label="rockstar">👊🏼✨</span>
          let&apos;s roll
          <span className="right" role="img" aria-label="cheers">🍣🥂</span>
        </button>
      </div>
    );
  }
}

export default App;
