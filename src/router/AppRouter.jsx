import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { AdminLayout } from '../admin/layout';
import {
  Customers,
  Daily,
  Dashboard,
  Geography,
  Overview,
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

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
