import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AdminLayout } from '../admin/layout';
import {
  AdminPage,
  Breakdown,
  Customers,
  Daily,
  Dashboard,
  Geography,
  Monthly,
  Overview,
  Performance,
  Products,
  Transactions,
} from '../admin/scenes';
import { LoginPage, PublicLayout } from '../auth';
import { useAuthStore } from '../hooks';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRouter';

const AppRouter = () => {
  const { checkAuthToken, status } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === 'checking') return;

  return (
    <Routes>
      <Route
        path="/auth"
        element={
          <PublicRoute>
            <PublicLayout />
          </PublicRoute>
        }
      >
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Route>

      <Route
        path="/"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="products" element={<Products />} />
        <Route path="customers" element={<Customers />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="geography" element={<Geography />} />

        <Route path="overview" element={<Overview />} />
        <Route path="daily" element={<Daily />} />
        <Route path="monthly" element={<Monthly />} />
        <Route path="breakdown" element={<Breakdown />} />

        <Route path="admin" element={<AdminPage />} />
        <Route path="performance" element={<Performance />} />

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
