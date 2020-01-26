// @flow

export default {
  toggle: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
  },
  toggleIcon: ({ allCompleted }: { allCompleted: boolean }) => ({
    transform: 'rotate(90deg)',
    ':before': {
      content: '"❯"',
      fontSize: '22px',
      color: allCompleted ? '#737373' : '#e6e6e6',
    },
  }),
};
