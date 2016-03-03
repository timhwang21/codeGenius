var React = require('react');
var Link = require('react-router').Link;

var HeaderActionsNoUser = React.createClass({
  contextTypes: {
    currentUser: React.PropTypes.object,
    loggedIn: React.PropTypes.bool,
    handleLogOut: React.PropTypes.func,
    redirectToAuth: React.PropTypes.func
  },

  render: function() {
    return (
      <div className="header-actions">
        <div className="action-notification">
          Login
        </div>
        <div className="user-iq">
          Something
        </div>
      </div>
    );
  }

});

module.exports = HeaderActionsNoUser;