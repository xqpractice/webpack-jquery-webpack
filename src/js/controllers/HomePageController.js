import React from 'react';
import Routes from './../config/Routes';
import ServerRoutes from './../config/ServerRoutes';
import ReactBaseController from './ReactBaseController';

class HomePageController extends ReactBaseController {
  constructor() {
    super();
    this.title = 'Home Page';
  }

  index() {
    this.renderPage(<ServerRoutes />, 'Routes');
  }
}

export default HomePageController;
