var React = require('react');

var HeaderPrimary = require("./headerPrimary");
var HeaderNav = require("./headerNav");
var LanguageDropDown = require("./languageDropDown");
var TypeDropDown = require("./typeDropDown");

var Header = React.createClass({
  render: function() {
    return(
      <header className="header">
        <HeaderPrimary />
        <HeaderNav />
      </header>
    );
  }
});

module.exports = Header;