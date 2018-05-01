// @flow

export default {
  list: {
    display: 'flex',
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  item: {
    padding: '3px 7px',
    margin: '3px',
    cursor: 'pointer',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '3px',
    borderColor: 'transparent',
    ':hover': {
      borderColor: 'rgba(175, 47, 47, 0.1)',
    },
  },
  selected: {
    borderColor: 'rgba(175, 47, 47, 0.2)',
  },
};
