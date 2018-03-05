import React, { Component } from 'react';
import { connect as felaConnect } from 'react-fela';
import { KEY_RETURN } from 'keycode-js';

class TodoInput extends Component {
  state = {
    text: this.props.text || '',
  };

  onChange = event => this.setState({ text: event.target.value });

  onKeyDown = (event) => {
    const text = event.target.value.trim();
    if (event.which === KEY_RETURN && text) {
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { placeholder, inputRef, styles } = this.props;

    return (
      <input
        type="text"
        ref={input => inputRef && inputRef(input)}
        className={styles.input}
        placeholder={placeholder}
        value={this.state.text}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

const style = {
  input: {
    flexGrow: '1',
    padding: '16px',
    border: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.003)',
    fontSize: '24px',
    outline: 'none',
    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
    '::placeholder': {
      fontStyle: 'italic',
      fontWeight: 300,
      color: '#e6e6e6',
    },
  },
};

export default felaConnect(style)(TodoInput);
