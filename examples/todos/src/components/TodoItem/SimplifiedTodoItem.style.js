// @flow

export default {
  container: ({ completed }: { completed: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: completed ? '#888' : undefined,
    ':hover': {
      backgroundColor: completed ? undefined : '#ddd',
    },
  }),
  text: ({ completed }: { completed: boolean }) => {
    const completedStyle = completed
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
  destroy: ({ completed }: { completed: boolean }) => ({
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'initial',
    color: completed ? 'white' : undefined,
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
