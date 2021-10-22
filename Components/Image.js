import classes from "./Image.module.css";
import { useState } from "react";
import SmallImage from "./SmallImage";
import firstImage from "../Refrence/images/image-product-1.jpg";
import secondImage from "../Refrence/images/image-product-2.jpg";
import thirdImage from "../Refrence/images/image-product-3.jpg";
import fourthImage from "../Refrence/images/image-product-4.jpg";
import firstImageThumbnail from "../Refrence/images/image-product-1-thumbnail.jpg";
import secondImageThumbnail from "../Refrence/images/image-product-2-thumbnail.jpg";
import thirdImageThumbnail from "../Refrence/images/image-product-3-thumbnail.jpg";
import fourthImageThumbnail from "../Refrence/images/image-product-4-thumbnail.jpg";
const Image = () => {
  const [currImage, setCurrImage] = useState(firstImage);

  const onclickHandler = (src) => {
    setCurrImage(src);
  };
  return (
    <>
      <div className={classes["big-img-container"]}>
        <img className={classes["big-image"]} src={currImage} alt="curr-img" />
      </div>
      <div className={classes["container-for-all-small-img"]}>
        <SmallImage
          src={firstImageThumbnail}
          onclick={onclickHandler.bind(null, firstImage)}
        />
        <SmallImage
          src={secondImageThumbnail}
          onclick={onclickHandler.bind(null, secondImage)}
        />
        <SmallImage
          src={thirdImageThumbnail}
          onclick={onclickHandler.bind(null, thirdImage)}
        />
        <SmallImage
          src={fourthImageThumbnail}
          onclick={onclickHandler.bind(null, fourthImage)}
        />
      </div>
    </>
  );
};

export default Image;
