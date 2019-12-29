import { useEffect } from "react";

export default (url, dispatch, type) => {
  useEffect(() => {
    dispatch({
      type: `SEARCH_${type}_REQUEST`
    });

    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: `SEARCH_${type}_SUCCESS`,
            payload: jsonResponse
          });
        } else {
          dispatch({
            type: `SEARCH_${type}_FAILURE`,
            error: jsonResponse.Error
          });
        }
      });
  }, [url]);
};
