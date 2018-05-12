// @flow

export type TodoInputProps = {
  text?: string,
  placeholder?: string,
  inputRef?: (HTMLInputElement | null) => void,
  onSave: string => any,
  styles?: Object,
};

export { default } from './TodoInput';
