import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { AdminLayout } from '../admin/layout';
import { Dashboard, Products } from '../admin/scenes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
