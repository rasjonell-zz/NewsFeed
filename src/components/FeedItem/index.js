import history from "config/history";
import useStyles from "hooks/useStyles";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import Truncate from "react-truncate-string";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from "@material-ui/icons/CheckCircle";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { PinnedContext } from "contexts/pinnedContext";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

import styles from "./styles";

export default ({ item, visited, pinned }) => {
  const classes = useStyles(styles);
  const { setPinned } = useContext(PinnedContext);

  const image = item.fields.thumbnail
    ? item.fields.thumbnail
    : `${process.env.PUBLIC_URL}/images/not_found.jpg`;

  const date = new Date(item.fields.lastModified);

  const trailText = () => {
    const tmp = document.createElement("div");
    tmp.innerHTML = item.fields.trailText;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {item.pillarName[0].toUpperCase()}
          </Avatar>
        }
        action={
          visited && (
            <Chip
              icon={<FaceIcon className={classes.icon} />}
              label="Visited"
              className={classes.chip}
            />
          )
        }
        title={item.pillarName}
        subheader={date.toDateString()}
      />
      <CardActionArea onClick={() => history.push(`/${item.id}`)}>
        <CardMedia
          className={classes.media}
          image={image}
          title={item.fields.headline}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            component="h2"
            align="center"
          >
            <Truncate text={item.fields.headline} />
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="span"
            align="center"
          >
            <Truncate text={trailText()} truncateAt={100} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => setPinned(item.id)}>
          {pinned ? "Unpin" : "Pin"}
        </Button>
        <Button size="small" color="primary" component={Link} to={item.id}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
