import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader";
import { useAuth } from "../contexts/AuthContext";

export default function NoLoggedRoute({ children }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  // console.log(location);
  if (isLoading) return <Loader />;
  if (user && !location.state) {
    return <Navigate to="/" replace />;
  }
  return children;
}
