import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

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

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
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
