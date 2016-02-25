// TODO: incorporate into splash page

var React = require('react');

var Popular = require('./index/popular.jsx');
var Header = require('./header/header.jsx');
var Test = require('../test.jsx'); //TODO TESTING
var Test2 = require('../test2.jsx'); //TODO TESTING


var Body = React.createClass({
  render: function() {
    return(
      <section className="index">
        <div className="wrapper">
          <Header />
          <Popular />
        </div>
        {this.props.children}
      </section>
    );
  }
});

module.exports = Body;