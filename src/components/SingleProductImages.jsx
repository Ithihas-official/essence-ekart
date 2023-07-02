import { useState } from "react";
import styled from "styled-components";

const SingleProductImages = ({ images = [[]] }) => {
  const [mainImg, setMainImg] = useState(images[0]);
  return (
    <SingleProductImgWrapper className="singleProductImageContainer">
      <div className="mainImageContainer">
        <img src={mainImg.url} alt="mainImg.filename" />
      </div>
      <div className="mainImageSelectorContainer">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              className={image.id === mainImg.id ? "borderAround" : ""}
              onClick={() => setMainImg(images[index])}
            />
          );
        })}
      </div>
    </SingleProductImgWrapper>
  );
};

const SingleProductImgWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  .mainImageContainer {
    width: 100%;
    img {
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: contain;
    }
  }
  .mainImageSelectorContainer {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 18%;
      aspect-ratio: 4 / 3;
    }
  }
`;

export default SingleProductImages;
