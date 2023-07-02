import { useAuth0 } from "@auth0/auth0-react";
import ErrorPage from "./ErrorPage.jsx";
import ProductLoading from "./ProductLoading.jsx";
const AuthWrapper = ({ children }) => {
  const { error, isLoading } = useAuth0();
  if (isLoading) {
    return <ProductLoading />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return <>{children}</>;
};

export default AuthWrapper;
