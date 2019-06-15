import { fade } from "@material-ui/core/styles";

export default theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(10)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    margin: "auto",
    width: "75vw",
    [theme.breakpoints.up("md")]: {
      width: "30vw"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "60vw",
    [theme.breakpoints.up("md")]: {
      width: "27vw"
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 5,
    color: "white"
  }
});
