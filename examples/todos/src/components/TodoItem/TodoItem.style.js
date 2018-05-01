// @flow

import { combineRules } from 'fela';
import { identifier } from '../../configs/felaConfig';
import activeIcon from './active.svg';
import completedIcon from './completed.svg';

import type { TodoItemProps } from './TodoItem';

const destroy = identifier();

export default {
  container: {
    display: 'flex',
    alignItems: 'center',
    [`:hover .${destroy}`]: {
      display: 'block',
    },
  },
  checkbox: {
    appearance: 'none',
    outline: 'none',
    ':after': {
      content: `url(${activeIcon})`,
    },
    ':checked:after': {
      content: `url(${completedIcon})`,
    },
  },
  text: ({ item }: TodoItemProps) => {
    const completedStyle = item.completed
      ? {
        color: '#d9d9d9',
        textDecoration: 'line-through',
      }
      : {};

    return {
      display: 'block',
      flexGrow: 1,
      padding: '15px',
      fontSize: '24px',
      transition: 'color 0.4s',
      ...completedStyle,
    };
  },
  destroy: combineRules(destroy, () => ({
    display: 'none',
    fontSize: '30px',
    width: '60px',
    outline: 'none',
    background: 'none',
    border: 'none',
    color: '#cc9a9a',
    transition: 'color 0.2s ease-out',
    ':after': {
      content: '"×"',
    },
    ':hover': {
      color: '#af5b5e',
    },
  })),
  input: {
    backgroundColor: '#ffffff',
    border: '1px solid #999999',
    boxShadow: 'inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2)',
  },
};
