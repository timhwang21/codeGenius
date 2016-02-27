var React = require('react');
var Link = require('react-router').Link;

var HeaderNav = React.createClass({
  handleClickLanguage: function() {
    console.log("this will unhide the languages dropdown");
  },

  handleClickAbout: function() {
    console.log("unhide the about dropdown");
  },

  render: function() {
    return(
      <nav className="header-nav">

        <div className="link-box">
          <div className="nav-link" onClick={this.handleClickLanguage}>
          Language ▾
          </div>
        </div>

        <div className="link-box">
          <Link to="snippets/new" className="nav-link">
          Add Snippet
          </Link>
        </div>

        <div className="link-box">
          <div className="nav-link" onClick={this.handleClickAbout}>
          About
          </div>
        </div>

      </nav>
    );
  }
});

module.exports = HeaderNav;


