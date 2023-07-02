import styled from "styled-components";
import PageHero from "../components/PageHero";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const temp = document.querySelector(".aboutArticleContainer");
    temp.classList.add("showAboutInfo");
  }, []);

  return (
    <AboutWrapper>
      <PageHero pageDir="About" />
      <article className="aboutArticleContainer">
        <h2>Welcome to Essence</h2>
        <p>
          At our Furniture Store, we believe that a well-furnished home is the
          key to creating a comfortable and inviting living space. We are
          dedicated to providing you with high-quality furniture that combines
          style, functionality, and affordability. With years of experience in
          the industry, we have curated a wide range of furniture pieces to suit
          various tastes and preferences. Whether you're looking to furnish your
          living room, bedroom, dining area, or home office, we have something
          for every room in your home. Our commitment to excellence is reflected
          in the selection of our products. We source our furniture from trusted
          manufacturers who prioritize quality craftsmanship and use durable
          materials. Each piece in our collection is carefully chosen to ensure
          it meets our stringent standards for both aesthetics and durability.
          We understand that choosing furniture can be an overwhelming task.
          That's why our friendly and knowledgeable staff is here to assist you
          every step of the way. From providing personalized recommendations to
          answering your questions about specific products, we strive to make
          your shopping experience enjoyable and hassle-free. Customer
          satisfaction is our top priority, and we go above and beyond to ensure
          that you are completely satisfied with your purchase. We offer a
          convenient and secure online shopping experience, with multiple
          payment options and reliable shipping services. In addition, we
          provide a hassle-free return and exchange policy, so you can shop with
          confidence. We believe that everyone deserves a beautifully furnished
          home, regardless of their budget. That's why we offer competitive
          prices without compromising on quality. We regularly update our
          inventory to bring you the latest trends and timeless classics,
          ensuring that you have access to a diverse selection of furniture at
          affordable prices. Thank you for visiting our website. We invite you
          to explore our collection and discover the perfect pieces to transform
          your home. If you have any questions or need assistance, please don't
          hesitate to contact us. space of your dreams.
        </p>
        <h5>Our team is here to help you create the living</h5>
      </article>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  width: 100vw;
  height: calc(100vh - 9rem);
  z-index: 0;
  position: absolute;
  top: 7rem;
  overflow: scroll;
  .aboutArticleContainer {
    opacity: 0;
    transition: opacity 1s linear;
    z-index: 0;
    width: 74vw;
    margin: 0 auto;
    position: relative;
    top: 3rem;
    padding: 2rem;
    background: rgba(225, 225, 225, 0.7);
    border-radius: 2rem;
    h2 {
      font-weight: 400;
      padding-left: 1rem;
      text-align: center;
    }
    h5 {
      font-weight: 400;
      text-align: center;
    }
    p {
      padding-left: 1rem;
      font-size: 0.9rem;
      font-weight: 300;
      text-align: center;
    }
  }
  .showAboutInfo {
    opacity: 1;
  }
  @media screen and (min-width: 992px) {
    .aboutArticleContainer {
      width: 85vw;
      h2 {
        text-align: left;
      }
      h5 {
        text-align: right;
      }

      p {
        text-indent: 3rem;
        text-align: left;
        font-size: 1rem;
      }
    }
  }
`;

export default About;
