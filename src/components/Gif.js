import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Gif = ({ image, title }) => {
  return (
    <div className="gif">
      <LazyLoadImage
        alt={title}
        src={image.downsized.url}
        effect="blur"
        className="gif__img"
        placeholderSrc={image.preview_gif.url}
      />
    </div>
  );
};

export default Gif;
