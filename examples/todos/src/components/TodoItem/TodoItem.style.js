// @flow

import { combineRules } from 'fela';
import { identifier } from '../../felaConfig';
import activeIcon from './active.svg';
import completedIcon from './completed.svg';

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
    width: '40px',
    appearance: 'none',
    outline: 'none',
    ':after': {
      content: `url(${activeIcon})`,
    },
    ':checked:after': {
      content: `url(${completedIcon})`,
    },
  },
  text: ({ completed }: { completed: boolean }) => ({
    display: 'block',
    flexGrow: 1,
    padding: '15px',
    fontSize: '24px',
    transition: 'color 0.4s',
    ...completed && {
      color: '#d9d9d9',
      textDecoration: 'line-through',
    },
  }),
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
