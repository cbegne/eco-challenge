import React from 'react';
import IconCheck from './IconCheck';
import IconUnchecked from './IconUnchecked';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.icon = this.icon.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  icon() {
    return this.props.checked ? <IconCheck /> : <IconUnchecked />;
  }

  toggle(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <button style={Styles.button} onClick={this.toggle}>
        <div style={Styles.check}>{this.icon()}</div>

        <div style={Styles.content}>{this.props.children}</div>
      </button>
    );
  }
}

const Styles = {
  button: {
    background: 'transparent',
    border: '0',
    marginBottom: '0.5rem',
    fontSize: '1rem',
    outline: '0',
    color: '#9B9B9B',
    marginRight: '0.5rem',
    cursor: 'pointer',
    textAlign: 'left',
    height: '20px',
    width: '30px',
  },

  check: {
    marginRight: '1rem',
  },

  content: {
    paddingTop: '0.2rem',
    fontSize: '0.9rem',
    fontWeight: '100',
    lineHeight: '1.25rem',
  },
};
