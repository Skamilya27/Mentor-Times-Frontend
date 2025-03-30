import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Protected({ children, allowedRoles = [] }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const isAdminAuthenticated = useSelector(state => state.adminAuth.isAuthenticated);
  const isAuthorAuthenticated = useSelector(state => state.auth.isAuthenticated);

  let userRole = null;
  if (isAdminAuthenticated) userRole = 'admin';
  else if (isAuthorAuthenticated) userRole = 'author';

  useEffect(() => {
    if (!userRole || !allowedRoles.includes(userRole)) {
      navigate('/');
    }
    setLoading(false);
  }, [userRole, allowedRoles, navigate]);

  return loading ? <div>Loading...</div> : <>{children}</>;
}

Protected.propTypes = {
    children: PropTypes.node.isRequired,
    allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  };