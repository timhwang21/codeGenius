var React = require('react');
var Link = require('react-router').Link;

var HeaderActionsUser = React.createClass({
  contextTypes: {
    router: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    loggedIn: React.PropTypes.bool,
    handleLogOut: React.PropTypes.func,
    redirectToAuth: React.PropTypes.func
  },

  handleClick: function(event) {
    event.preventDefault();
    // replace with showing dropdown + signout
    this.context.router.push('main/user/' + this.context.currentUser.id)
  },

  render: function() {
    return (
      <div className="header-actions noselect" onClick={this.handleClick}>
        <div className="user-profile-bar" >
          {this.context.currentUser.username}

          <img 
            className="user-profile-small"
            src={"assets/" + this.context.currentUser.image_url} />
        </div>

        <div className="user-iq">
          {this.context.currentUser.iq} &nbsp;▾
        </div>
      </div>
    );
  }

});

module.exports = HeaderActionsUser;