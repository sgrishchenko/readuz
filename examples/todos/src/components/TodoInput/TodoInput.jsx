// @flow

import { inject, type Reader } from 'readuz';
import React, { useState } from 'react';
import { connect as felaConnect } from 'react-fela';

import type { ComponentEnv } from '../componentEnv';
import type { TodoInputProps } from './index';

export const TodoInput: Reader<ComponentEnv, React$ComponentType<TodoInputProps>> = inject(
  (env: ComponentEnv) => env.TodoInput.style,
  (style) => {
    const TodoInputComponent = ({
      text: defaultText,
      placeholder,
      inputRef,
      onSave,
      styles = {},
    }: TodoInputProps) => {
      const [text, setText] = useState(defaultText || '');

      const onChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value);
      };

      const onKeyDown = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
        const currentText = event.currentTarget.value.trim();
        if (event.key === 'Enter' && currentText) {
          onSave(text);
          setText();
        }
      };

      return (
        <input
          type="text"
          ref={(input) => inputRef && inputRef(input)}
          className={styles.input}
          placeholder={placeholder}
          value={text}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      );
    };

    return felaConnect(style)(TodoInputComponent);
  },
);
