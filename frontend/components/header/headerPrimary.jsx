var React = require('react');
var Link = require('react-router').Link;

var headerLogo = "/assets/codegenius-logo-small";

var SessionStore = require('../../stores/sessionStore');

var HeaderPrimary = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    currentUser: React.PropTypes.object,
    loggedIn: React.PropTypes.func,
    handleLogOut: React.PropTypes.func,
    redirectToAuth: React.PropTypes.func
  },

  // headerActions: function() {
  //   if (Object.keys.this.context.currentUser.le) {}
  // }

  render: function() {
    debugger;
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
            {this.context.currentUser.username}
          </div>
          <img 
            className="user-profile-small"
            src={"assets/" + this.context.currentUser.image_url} />
          <div className="user-iq">
            {this.context.currentUser.iq}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HeaderPrimary;