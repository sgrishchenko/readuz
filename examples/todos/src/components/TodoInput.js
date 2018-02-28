import React, { Component } from 'react';
import { KEY_RETURN } from 'keycode-js';

export default class TodoInput extends Component {
  state = {
    text: '',
  };

  onChange = (event) => {
    this.setState({ text: event.target.value });
  };

  onKeyDown = (event) => {
    const text = event.target.value.trim();
    if (event.which === KEY_RETURN && text) {
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <input
        placeholder="What needs to be done?"
        value={this.state.text}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}
