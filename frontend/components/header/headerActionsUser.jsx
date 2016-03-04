var React = require('react');
var Link = require('react-router').Link;

var HeaderActionsUser = React.createClass({
  contextTypes: {
    currentUser: React.PropTypes.object,
    loggedIn: React.PropTypes.bool,
    handleLogOut: React.PropTypes.func,
    redirectToAuth: React.PropTypes.func
  },

  render: function() {
    return (
      <div className="header-actions">
        <div className="action-notification noselect">
          {this.context.currentUser.username}
        </div>
        <img 
          className="user-profile-small noselect"
          src={"assets/" + this.context.currentUser.image_url} />
        <div className="user-iq noselect">
          {this.context.currentUser.iq} &nbsp;▾
        </div>
      </div>
    );
  }

});

module.exports = HeaderActionsUser;