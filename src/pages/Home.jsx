import styled from "styled-components";
import { FeaturedProductsHome, HomeBase, ServiceHome } from "../components";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeBase />
      <FeaturedProductsHome />
      <ServiceHome />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.section`
  position: absolute;
  top: 5rem;
  height: calc(100vh - 7rem);
.homeBaseContainer{

    width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  height:100%;
}
  .contentHomeBase {
    padding-left:1rem;
    p {
      display: none;
    }
    h2{
      display: block;
    }
  }
  .imageBtnHomeBaseContainer {
    padding-left:1rem;
    img {
      display: none;
    }
    a {
      display: block;
    }

  }

.sevicesHomeContainer{
  background:rgba(0,0,0,0.1);
  padding:2rem;
  margin-bottom:2rem;
  h2{
    text-align:center;
    text-transform:uppercase;
    padding:2rem;
  }
}

.servicesInfoHome{
  width:100%;
  display:flex;
  gap:2rem;
  flex-flow:column;
  justify-content:center;
  align-items:center;
}

.serviceInfoContainer{
  background:var(--accentColor);
  width:80%;
  display:flex;
  flex-flow:column;
  align-items:center;
  padding: 1rem;
  border-radius:1rem;
  svg{
    width:2rem;
    height:2rem;
    font-size:1rem;
    padding:1rem;
    background:rgba(255,255,255,0.5);
    border-radius:100%;
  }
  h3{
    text-transform:capitalize;
  }
  p{
    font-weight:400;
  }
}


  @media screen and (min-width: 992px) {
    .homeBaseContainer{

      width: 80%;
      height:100%;
      margin:0 auto;
    display: flex;
      gap:2rem;
    flex-flow: row;
        align-items: center;
  justify-content: center;
    }

  .contentHomeBase {
    padding-left:0rem;
    p {
      display: block;
      font-size:1.2rem;
      font-weight:300;
      text-indent:2rem;

    }
    h2{
      display: none;
    }
  }
  .imageBtnHomeBaseContainer {
    padding-left:0rem;
    img {
      display: block;
      width:35rem;
box-shadow: 2rem 2rem 3rem 1rem rgba(0, 0, 0, 0.2);
    }
    a {
      display: none;
    }
  }

.servicesInfoHome{
  width:80%;
  margin:0 auto;
  display:flex;
  flex-flow:row;
  justify-content:space-evenly;
}

.serviceInfoContainer{
  max-width:20rem;
  display:flex;
  flex-flow:column;
}
`;

export default Home;
