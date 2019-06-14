import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchSelected } from "helpers/fetchHelper";

export default ({ match: { params } }) => {
  const [error, setError] = useState(false);
  const [content, setContent] = useState();

  useEffect(() => {
    const getSelected = async () => {
      const [status, content] = await fetchSelected(params);
      status === "ok" ? setContent(content) : setError(true);
    };
    getSelected();
  }, [params]);

  if (error) return <Redirect to="/404" />;
  if (!content) return <h2>Loading</h2>;

  return (
    <div>
      <h1>{content.fields.headline}</h1>
      <p>{content.fields.bodyText}</p>
    </div>
  );
};
