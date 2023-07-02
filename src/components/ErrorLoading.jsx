import styled from "styled-components";

const ErrorLoading = () => {
  return (
    <ErrorLoadingWrapper>
      <h2>featured product</h2>
      <h3>something went wrong will try again later</h3>
    </ErrorLoadingWrapper>
  );
};
const ErrorLoadingWrapper = styled.section`
  width: 100vw;
  text-align: center;
  h2 {
    text-transform: uppercase;
  }
`;
export default ErrorLoading;
