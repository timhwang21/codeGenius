var React = require('react');

var Header = require('./header/header.jsx');


var App = React.createClass({
  render: function() {
    return(
      <div className="app">
        <Header />
        {this.props.children}  
      </div>
    );
  }
});

module.exports = App;

