import styled from "styled-components";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
const RatingStars = ({ stars, reviews }) => {
  const productRating = Array.from({ length: 5 }, (_, index) => {
    const num = index + 0.5;
    return (
      <span key={index}>
        {stars > num ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <RatingWrapper className="ratingWrapper cartRating">
      <h2>
        {stars} {productRating}
      </h2>
      <h3>{reviews} reviews</h3>
    </RatingWrapper>
  );
};

const RatingWrapper = styled.div`
  svg {
    font-size: 1rem;
  }
  h3 {
    font-weight: 200;
    font-size: 0.8rem;
  }
`;

export default RatingStars;
