var React = require('react');

var HeaderPrimary = require("./headerPrimary");
var HeaderNav = require("./headerNav");
var LanguageDropDown = require("./languageDropDown");
var TypeDropDown = require("./typeDropDown");

var Header = React.createClass({
  contextTypes: {
    loggedIn: React.PropTypes.bool,
  },
  
  createNewSnippetBar: function() {
    if (this.context.loggedIn) {
      return(
        <HeaderNav />
      );
    }
  },
  render: function() {
    return(
      <header className="header">
        <HeaderPrimary />
        {this.createNewSnippetBar()}
      </header>
    );
  }
});

module.exports = Header;