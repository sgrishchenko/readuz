// @flow

import type { TodoItemProps } from './index';

export default {
  container: ({ item }: TodoItemProps) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: item.completed ? '#888' : undefined,
    ':hover': {
      backgroundColor: item.completed ? undefined : '#ddd',
    },
  }),
  text: ({ item }: TodoItemProps) => {
    const completedStyle = item.completed
      ? {
        color: 'white',
        textDecoration: 'line-through',
        backgroundColor: '#888',
        ':before': {
          content: '""',
          position: 'absolute',
          borderColor: 'white',
          borderStyle: 'solid',
          borderTop: '2px',
          borderLeft: '2px',
          top: '10px',
          left: '16px',
          transform: 'rotate(45deg)',
          height: '15px',
          width: '7px',
        },
      }
      : {};

    return {
      flexGrow: 1,
      cursor: 'pointer',
      position: 'relative',
      padding: '12px 8px 12px 40px',
      fontSize: '18px',
      transition: '0.2s',
      ...completedStyle,
    };
  },
  destroy: ({ item }: TodoItemProps) => ({
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'initial',
    color: item.completed ? 'white' : undefined,
    backgroundColor: 'transparent',
    height: '45px',
    width: '45px',
    ':before': {
      content: '"×"',
    },
    ':hover': {
      color: 'white',
      backgroundColor: '#f44336',
    },
  }),
  input: {
  },
};
