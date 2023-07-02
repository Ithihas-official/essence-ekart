import ekart from "./../assets/ekart1.jpg";
import { Link } from "react-router-dom";

const HomeBase = () => {
  return (
    <article className="homeBaseContainer">
      <div className="contentHomeBase">
        <h2>
          Design your comfort zone with <span>essence</span>
        </h2>
        <p>
          Welcome to our furniture store, where style meets comfort. Discover a
          wide selection of exquisite furniture pieces that are designed to
          transform your space into a haven of elegance. From sleek and modern
          to timeless classics, our collection caters to diverse tastes and
          preferences. Immerse yourself in a world of quality craftsmanship,
          with each piece carefully curated to ensure durability and
          functionality. Our knowledgeable staff is here to assist you in
          finding the perfect furniture to complement your unique style and
          create a personalized atmosphere. Visit our store today and let us
          help you turn your house into a home.
        </p>
      </div>
      <div className="imageBtnHomeBaseContainer">
        <img src={ekart} alt="essence" />
        <Link to="/products">
          <button type="button" className="btn">
            Products
          </button>
        </Link>
      </div>
    </article>
  );
};

export default HomeBase;
