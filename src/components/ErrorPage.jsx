import styled from "styled-components";
import error404 from "./../assets/404.svg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
	return (
		<ErrorWrapper>
			<img src={error404} alt="404-error" />
			<h3>Sorry, The Page you tried cannot be found</h3>
			<Link to="/">
				<button type="button" className="btn">
					Go Home
				</button>
			</Link>
		</ErrorWrapper>
	);
};

const ErrorWrapper = styled.div`
  display: absolute;
  top: 5rem;
  height: calc(100vh - 2rem);
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
overflow:hidden;
  img {
    width: 70vw;
  }
  button {
    font-weight: 600;
  }

  a {
    unset: all;
    background: transparent;
  }
  @media screen and (min-width: 992px) {
    img {
      width: 40rem;
    }
  }
`;

export default ErrorPage;
