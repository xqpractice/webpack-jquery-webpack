import React from 'react';
import { StaticRouter } from 'react-router-dom';
import PageRoutes from './../pages/PageRoutes';

const ServerRoutes = () => {
  return (
    <StaticRouter>
      <PageRoutes />
    </StaticRouter>
  );
};

export default ServerRoutes;
