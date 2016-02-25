var React = require('react');
var Link = require('react-router').Link;

var headerLogo = "/assets/codegenius-logo-small";

var HeaderPrimary = React.createClass({
  render: function() {
    return(
      <div className="header-primary">
        <div className="header-searchbar">
          <p>SEARCHBAR GOES HERE</p>
        </div>

        <div className="header-logo">
          <Link to="/">
            <img src={headerLogo} height="38" width="202" />
          </Link>
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
    );
  }
});

module.exports = HeaderPrimary;