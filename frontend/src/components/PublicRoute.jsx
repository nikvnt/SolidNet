import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PublicRoute = ({ children }) => {
  const { session } = useAuth();

  if (session) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PublicRoute;
