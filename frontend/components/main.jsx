var React = require('react');

var Header = require('./header/header');

var Main = React.createClass({

  render: function() {
    return(
      <div className="app">
        <Header />
        {this.props.children}  
      </div>
    );
  }
});

module.exports = Main;

