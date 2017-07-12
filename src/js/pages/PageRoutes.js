import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import DojoPage from './DojoPage';
import JQueryPage from './JQueryPage';

class PageRoutes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-container">
        <nav>
          <Link to="/">Goto Home</Link>
          <Link to="/dojo">Goto Dojo</Link>
          <Link to="/jquery">Goto JQuery</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/dojo" component={ DojoPage }/>
          <Route path="/jquery" component={ JQueryPage }/>
        </Switch>
      </div>
    );
  }
}

export default PageRoutes;
