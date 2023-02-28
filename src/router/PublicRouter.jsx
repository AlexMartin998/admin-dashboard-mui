import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks';

export const PublicRoute = ({ children }) => {
  const { user } = useAuthStore();

  return !user?.uid ? children : <Navigate to="/dashboard" replace />;
};
