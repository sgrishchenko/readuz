// @flow

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    margin: 0,
    fontSize: '100px',
    fontWeight: 100,
    color: 'rgba(175, 47, 47, 0.15)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: '550px',
    boxShadow: [
      '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      '0 25px 50px 0 rgba(0, 0, 0, 0.1)',
    ].join(),
  },
  header: {
    display: 'flex',
  },
  toggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '55px',
    backgroundColor: 'rgba(0, 0, 0, 0.003)',
    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#777777',
    padding: '10px 15px',
    boxShadow: [
      '0 1px 1px rgba(0, 0, 0, 0.2)',
      '0 8px 0 -3px #f6f6f6',
      '0 9px 1px -3px rgba(0, 0, 0, 0.2)',
      '0 16px 0 -6px #f6f6f6',
      '0 17px 2px -6px rgba(0, 0, 0, 0.2)',
    ].join(),
  },
  footerEdging: {
    flexBasis: '115px',
    flexShrink: 0,
    flexGrow: 0,
  },
};
