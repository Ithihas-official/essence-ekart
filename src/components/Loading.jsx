import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingWrapper>
      <h2>featured products</h2>
      <article>
        <h3>Loading...</h3>
      </article>
    </LoadingWrapper>
  );
};
const LoadingWrapper = styled.section`
  width: 100vw;
  height: 10rem;
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
  article {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 1.4rem;
  }
`;
export default Loading;
