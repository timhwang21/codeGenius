var React = require('react');

var Popular = require('./index/popular.jsx');
var Header = require('./header/header.jsx');
// var News = require('./news/news.jsx')


// Try using align-content: space-between for header-wrapper-footer!
// Eventually move popular to children
var Body = React.createClass({
  render: function() {
    return(
      <section className="body">
        <Header />
        <div className="wrapper">
          <Popular />
          {this.props.children}
        </div>
      </section>
    );
  }
});

module.exports = Body;