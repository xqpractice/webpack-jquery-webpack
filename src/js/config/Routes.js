import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './../pages/PageRoutes';

const Routes = () => {
  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
};

export default Routes;
