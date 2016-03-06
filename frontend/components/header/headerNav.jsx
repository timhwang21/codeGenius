var React = require('react');
var Link = require('react-router').Link;

var HeaderNav = React.createClass({
  render: function() {
    return(
      <nav className="header-nav">
        <div className="link-box">
          <Link to="main/snippets/new" className="nav-link">
          Add Snippet
          </Link>
        </div>
      </nav>
    );
  }
});

module.exports = HeaderNav;


