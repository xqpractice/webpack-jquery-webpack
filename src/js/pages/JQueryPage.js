import React from 'react';
import $ from 'jquery';

class JQueryPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('#jquery-page').text('Hello Jquery, I am setted by jquery.');
  }

  render() {
    return (
      <div id="jquery-page" className="page home-page">
        Hello JQuery
      </div>
    );
  }
}

export default JQueryPage;
