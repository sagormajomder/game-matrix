import { Navigate } from "react-router";
import Loader from "../components/Loader";
import { useAuth } from "../contexts/AuthContext";

export default function NoLoggedRoute({ children }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return <Loader />;
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
}
