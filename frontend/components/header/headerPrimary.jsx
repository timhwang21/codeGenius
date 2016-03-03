var React = require('react');
var Link = require('react-router').Link;

var headerLogo = "/assets/codegenius-logo-small";

var SessionStore = require('../../stores/sessionStore');
var HeaderActionsNoUser = require('./headerActionsNoUser');
var HeaderActionsUser = require('./headerActionsUser');

var HeaderPrimary = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    currentUser: React.PropTypes.object,
    loggedIn: React.PropTypes.bool,
    handleLogOut: React.PropTypes.func,
    redirectToAuth: React.PropTypes.func
  },

  headerActions: function() {
    if (this.context.loggedIn) {
      return <HeaderActionsUser />;
    } else {
      return <HeaderActionsNoUser />;
    }
  },

  render: function() {
    // debugger;
    return(
      <div className="header-primary">
        <div className="header-searchbar">
          <p>SEARCHBAR GOES HERE</p>
        </div>

        <div className="header-logo">
          <Link to="main/">
            <img src={headerLogo} height="38" width="202" />
          </Link>
        </div>

        {this.headerActions()}

      </div>
    );
  }
});

module.exports = HeaderPrimary;