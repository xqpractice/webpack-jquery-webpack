import React from 'react';
import dojo from 'dojo';
// var dojo = require('dojo');
// import { dom, domConstruct } from 'dojo';
// import dom from 'dojo/dom';
// import domConstruct from 'dojo/dom-construct';
// var dom = require('dojo/dom');
// var domConstruct = require('dojo/dom-construct');

class DojoPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let dojoNode = dojo.byId('dojo-page');
    dojo.place('<em>Hi, Dojo. I am setted by Dojo.</em>', dojoNode);
  }

  render() {
    return (
      <div id="dojo-page" className="page home-page">
        Hello Dojo
      </div>
    );
  }
}

export default DojoPage;
