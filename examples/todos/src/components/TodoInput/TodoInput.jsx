// @flow

import { inject, type Reader } from 'readuz';
import React, { Component } from 'react';
import { connect as felaConnect } from 'react-fela';

import type { ComponentEnv } from '../componentEnv';
import type { TodoInputProps } from './index';

export type TodoInputState = {
  text: string,
};

export const TodoInput: Reader<ComponentEnv, React$ComponentType<TodoInputProps>> = inject(
  (env: ComponentEnv) => env.TodoInput.style,
  (style) => {
    class TodoInputComponent extends Component<TodoInputProps, TodoInputState> {
      constructor(props: TodoInputProps) {
        super(props);

        this.state = {
          text: props.text || '',
        };
      }

      onChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
        this.setState({ text: event.currentTarget.value });
      };

      onKeyDown = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
        const text = event.currentTarget.value.trim();
        const { onSave } = this.props;
        if (event.key === 'Enter' && text) {
          onSave(text);
          this.setState({ text: '' });
        }
      };

      render() {
        const { placeholder, inputRef, styles = {} } = this.props;
        const { text } = this.state;

        return (
          <input
            type="text"
            ref={(input) => inputRef && inputRef(input)}
            className={styles.input}
            placeholder={placeholder}
            value={text}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
          />
        );
      }
    }

    return felaConnect(style)(TodoInputComponent);
  },
);
