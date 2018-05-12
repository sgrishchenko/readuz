// @flow

export default {
  list: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  item: {
    ':nth-child(even)': {
      backgroundColor: '#eee',
    },
    ':nth-child(odd)': {
      backgroundColor: '#f9f9f9',
    },
  },
};
