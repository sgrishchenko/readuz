// @flow

import React, { Component } from 'react';
import { connect as felaConnect } from 'react-fela';
import style from './TodoInput.style';

export type TodoInputProps = {
  text?: string,
  placeholder?: string,
  inputRef?: (HTMLInputElement | null) => void,
  onSave: string => void,
  styles: Object,
};

export type TodoInputState = {
  text: string,
};

class TodoInput extends Component<TodoInputProps, TodoInputState> {
  state = {
    text: this.props.text || '',
  };

  onChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ text: event.currentTarget.value });
  };

  onKeyDown = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value.trim();
    if (event.key === 'Enter' && text) {
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

export default felaConnect(style)(TodoInput);
