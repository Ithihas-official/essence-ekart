import styled from "styled-components";

const ProductLoading = () => {
  return (
    <ProductLoadingWrapper>
      <div className="loading"></div>
    </ProductLoadingWrapper>
  )
};

const ProductLoadingWrapper = styled.section`
  width:100%;
  height: calc(100vh-9rem);
  display:flex;
  justify-content:center;
  align-items:center;
`

export default ProductLoading;
