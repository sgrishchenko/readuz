// @flow

export type TodoInputProps = {
  text?: string,
  placeholder?: string,
  inputRef?: (HTMLInputElement | null) => void,
  onSave: string => any,
  extend?: {
    input?: {}
  },
};

export { TodoInput } from './TodoInput';
