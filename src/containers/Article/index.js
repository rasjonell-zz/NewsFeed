import some from "lodash/some";
import useStyles from "hooks/useStyles";
import Loading from "components/Loading";
import Chip from "@material-ui/core/Chip";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";
import FaceIcon from "@material-ui/icons/Face";
import Checkbox from "@material-ui/core/Checkbox";
import { fetchSelected } from "helpers/fetchHelper";
import Typography from "@material-ui/core/Typography";
import { PinnedContext } from "contexts/pinnedContext";
import CalendarIcon from "@material-ui/icons/DateRange";
import CheckIcon from "@material-ui/icons/CategoryRounded";
import React, { useState, useEffect, useContext } from "react";

import styles from "./styles";

export default ({ match: { params } }) => {
  const classes = useStyles(styles);
  const [content, setContent] = useState();
  const [error, setError] = useState(false);
  const { pinned, setPinned } = useContext(PinnedContext);
  const [cookies, setCookie] = useCookies(["visited-pages"]);

  useEffect(() => {
    const getSelected = async () => {
      const [status, content] = await fetchSelected(params);
      if (status === "ok") {
        setContent(content);

        const visited = cookies["visited-pages"];

        if (visited && !visited.includes(content.id))
          setCookie("visited-pages", [...visited, content.id], { path: "/" });
        else if (!visited)
          setCookie("visited-pages", [content.id], { path: "/" });
      } else setError(true);
    };
    getSelected();
  }, [cookies, params, setCookie]);

  if (error) return <Redirect to="/404" />;
  if (!content) return <Loading />;

  const image = content.fields.thumbnail
    ? content.fields.thumbnail
    : `${process.env.PUBLIC_URL}/images/not_found.jpg`;

  const date = new Date(content.fields.lastModified);
  const pinnedItem = some(pinned, { id: content.id });

  return (
    <div className={classes.root}>
      <div className={classes.headline}>
        <Typography variant="h3" align="center" gutterBottom>
          {content.fields.headline}
        </Typography>
        <div className={classes.author}>
          <Chip
            className={classes.chip}
            icon={<CheckIcon className={classes.icon} />}
            label={content.pillarName}
          />
          <Chip
            className={classes.chip}
            icon={<FaceIcon className={classes.icon} />}
            label={content.fields.byline}
          />
          <Chip
            className={classes.chip}
            icon={<CalendarIcon className={classes.icon} />}
            label={date.toDateString()}
          />
          <Chip
            className={classes.chip}
            icon={
              <Checkbox
                className={classes.icon}
                checked={pinnedItem}
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
                onChange={() => setPinned(content.id)}
              />
            }
            label={pinnedItem ? "Unpin News" : "Pin News"}
          />
        </div>
      </div>
      <div className={classes.headline}>
        <img src={image} alt={content.fields.headline} />
      </div>
      <Typography variant="body1" align="center">
        {content.fields.bodyText}
      </Typography>
    </div>
  );
};
