export default theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  field: {
    display: 'flex',
    flexDirection: 'row',
    whiteSpace: 'nowrap',
    overflow: 'auto'
  },
  item: {
    marginRight: theme.spacing(2)
  }
});