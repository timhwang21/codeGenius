var React = require('react');

var HeaderNav = React.createClass({
  render: function() {
    return(
      <nav className="header-nav">

        <div className="link-box">
          <a className="nav-link" href="#">
          Language ▾
          </a>
        </div>

        <div className="link-box">
          <a className="nav-link" href="#">
          Problem Type ▾
          </a>
        </div>

        <div className="link-box">
          <a className="nav-link" href="#">
          Add Snippet
          </a>
        </div>

        <div className="link-box">
          <a className="nav-link" href="#">
          About
          </a>
        </div>

      </nav>
    );
  }
});

module.exports = HeaderNav;