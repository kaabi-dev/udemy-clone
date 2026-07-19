import { Fragment } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RouteGuard = ({ authenticated, user, element }) => {
  const location = useLocation();

  // If user is not authenticated and visits other than /auth
  // then redirect to /auth.
  if (!authenticated && !location.pathname.includes('/auth')) {
    return <Navigate to='/auth' />;
  }

  // If user is authenticated but don't have instructor role
  // // and tries to access instructor route or tries to access /auth
  // then redirect user to /home page.
  if (
    authenticated &&
    user?.role !== 'instructor' &&
    (location.pathname.includes('instructor') ||
      location.pathname.includes('/auth'))
  ) {
    return <Navigate to='/home' />;
  }

  // If user instructor is authenticated and tries to access a route that is not instructor related route
  // the redirect instructor user to /instructor route.
  if (
    authenticated &&
    user.role === 'instructor' &&
    !location.pathname.includes('instructor')
  ) {
    return <Navigate to='/instructor' />;
  }

  return <Fragment>{element}</Fragment>;
};

export default RouteGuard;
