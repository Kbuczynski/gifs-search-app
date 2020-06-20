import React, { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";
import Gif from "./Gif";
import { fetchTypes } from "../data/fetchTypes";
import Preloader from "./Preloader";

const Content = ({ query }) => {
  const NUMBER_OF_GIFS = 24;
  const [offset, setOffset] = useState(0);
  const { data } = useApi(fetchTypes.search, query, NUMBER_OF_GIFS, offset);
  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    setDataToShow([]);
    setOffset(0);
  }, [query]);

  useEffect(() => {
    if (data != null) {
      const newData = dataToShow.concat(...data);
      setDataToShow(newData);
    }
  }, [data]);

  const handleClick = () => setOffset(offset + NUMBER_OF_GIFS);

  return (
    <section className="content">
      <div className="content__box">
        {dataToShow == null ? <Preloader /> : dataToShow.length > 0 ? (
          dataToShow.map(({ images, title }, index) => {
            return <Gif key={index} image={images} title={title} />;
          })
        ) : (
          <Preloader />
        )}
      </div>
      {dataToShow.length > 0 && (
        <button className="content__button" onClick={handleClick}>
          load more
        </button>
      )}
    </section>
  );
};

export default Content;
