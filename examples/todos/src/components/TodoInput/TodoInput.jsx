// @flow

import { inject } from 'readuz';
import React, { Component } from 'react';
import { connect as felaConnect } from 'react-fela';

import type { ComponentEnv } from '../componentEnv';
import type { TodoInputProps } from './index';

export type TodoInputState = {
  text: string,
};

export default inject(
  (env: ComponentEnv) => env.TodoInput.style,
  (style) => {
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
        const { placeholder, inputRef, styles = {} } = this.props;

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

    return felaConnect(style)(TodoInput);
  },
);
