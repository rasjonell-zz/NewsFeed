export const fetchNews = async (page = 1, query = "") => {
  const url = new URL("https://content.guardianapis.com/search");
  const params = [
    ["q", query],
    ["page", page],
    ["page-size", 6],
    ["show-fields", "all"],
    ["api-key", process.env.REACT_APP_API_KEY]
  ];
  url.search = new URLSearchParams(params);

  const result = await fetch(url);
  const {
    response: { results }
  } = await result.json();

  return results;
};

export const fetchSelected = async id => {
  let preUrl =
    typeof id === "object"
      ? `${id.section}/${id.year}/${id.month}/${id.day}/${
          id.title
        }`
      : id;
  const url = new URL(`https://content.guardianapis.com/${preUrl}`);

  const params = [
    ["api-key", process.env.REACT_APP_API_KEY],
    ["show-fields", "all"]
  ];
  url.search = new URLSearchParams(params);

  try {
    const result = await fetch(url);
    const {
      response: { content, status }
    } = await result.json();
    return [status, content];
  } catch (error) {
    return ["error", null];
  }
};
