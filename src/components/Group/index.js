import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 48 };
    this.getSize = throttle(() => {
      const size = Math.floor(window.innerWidth / props.group.length);
      this.setState({ size });
    }, 125);
  }

  componentDidMount() {
    this.getSize();
    if (window) {
      window.addEventListener('resize', this.getSize);
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.getSize);
    }
  }

  render() {
    return (
      <div className="group">
        {this.props.group.map((person, idx) => {
          const [firstName] = person.name.split(' ');
          return (
            <div
              className="person"
              key={`person_${idx + 1}`}
              style={{
                background: `url(${person.imgUrl})`,
                backgroundSize: `${this.state.size}px ${this.state.size}px`,
                textAlign: 'center',
                borderRadius: `${this.state.size * 0.5}px`,
                width: `${this.state.size}px`,
                height: `${this.state.size}px`,
                lineHeight: `${this.state.size}px`,
                margin: '0px 4px',
                transition: 'all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)',
                willChange: 'contents',
              }}
            >
              <div className="name">{false && firstName}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

Group.propTypes = {
  group: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    imgUrl: PropTypes.string,
  })).isRequired,
};

export default Group;
