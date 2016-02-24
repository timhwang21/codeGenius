// TODO: incorporate into splash page

var React = require('react');

var Popular = require('./index/popular.jsx');


var Index = React.createClass({
  render: function() {
    return(
      <section className="index">
        <Popular />
      </section>
    );
  }
});

module.exports = Index;