import { useEffect, useReducer } from "react";
import axios from "axios";

const doFetch = async (
  type,
  query,
  limit = 25,
  offset = 0,
  raiting = "g",
  tag = ""
) => {
  let API = `https://api.giphy.com/v1/gifs/${type}?api_key=${process.env.REACT_APP_API_KEY}`;

  return await axios({
    method: "GET",
    url: API,
    params: {
      q: query,
      limit: limit,
      offset: offset,
      raiting: raiting,
      tag: tag,
    }
  });
};

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING':
      return { data: null, isLoading: true, error: null };
    case "SUCCESS":
      return { data: action.payload, error: null };
    case "ERROR":
      return { data: null, error: action.payload };
    default:
      break;
  }

  return state;
};

export const useApi = (type, query, limit, offset, raiting, tag) => {
  const [response, dispatch] = useReducer(apiReducer, {
    data: null,
    error: null
  });

  useEffect(() => {
    dispatch({ type: 'FETCHING' });
    doFetch(type, query, limit, offset, raiting, tag)
      .then((data) => dispatch({ type: "SUCCESS", payload: data.data.data }))
      .catch((error) => dispatch({ type: "ERROR", payload: error }));
  }, [type, query, limit, offset, raiting, tag]);

  return response;
};
