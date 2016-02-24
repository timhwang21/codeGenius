var React = require('react');

var headerLogo = "/assets/codegenius-logo-small";
var languageDropDown = "./languageDropDown";
var typeDropDown = "./typeDropDown";

var Header = React.createClass({
  render: function() {
    return(
      <header className="header">
        <div className="header-primary">
          <div className="header-searchbar">
            <p>SEARCHBAR GOES HERE</p>
          </div>

          <div className="header-logo">
            <a href="#" className="header-logo-link">
              <img src={headerLogo} height="38" width="202" />
            </a>
          </div>

          <div className="header-actions">
            <div className="action-notification">
              Notif
            </div>
            <div className="user-info">
              IMG
              <div className="user-iq">
                100
              </div>
            </div>
          </div>
        </div>

        <nav className="header-nav">

          <div className="nav-link-box">
            <a className="nav-link" href="api/languages">
            Language ▾
            </a>
          </div>

          <div className="nav-link-box">
            <a className="nav-link" href="#">
            Problem Type ▾
            </a>
          </div>

          <div className="nav-link-box">
            <a className="nav-link" href="#">
            Add Snippet
            </a>
          </div>

          <div className="nav-link-box">
            <a className="nav-link" href="#">
            About
            </a>
          </div>

        </nav>

      </header>
      );
  }
});

module.exports = Header;