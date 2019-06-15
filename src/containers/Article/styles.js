export default theme => ({
  root: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  author: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  avatar: {
    backgroundColor: theme.palette.primary.main
  },
  chip: {
    color: "white",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.primary.main
  },
  headline: {
    marginBottom: theme.spacing(2)
  },
  icon: {
    color: 'white'
  }
});