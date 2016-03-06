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

  getInitialState: function() {
    return {display: "none"};
  },

  handleClick: function(event) {
    event.preventDefault();
    if (this.state.display == "none") {
      this.setState({display: "flex"})
    } else {
      this.setState({display: "none"})
    }
  },

  // div 
  //   className="snippet-img-box" 
  //   style={{backgroundImage: "url(" + image_url + ")"}}
  // /

  handleLogoutClick: function(event) {
    event.preventDefault();
    this.context.handleLogOut();
    this.context.redirectToAuth();
  },

  render: function() {
    return (
      <div className="header-actions noselect" onClick={this.handleClick}>
        <div className="user-profile-bar" >
          <img 
            className="user-profile-small"
            src={"assets/" + this.context.currentUser.image_url} />
        </div>

        <div className="user-iq">
          {this.context.currentUser.iq} &nbsp;▾
        </div>

        <div className="header-dropdown" style={{display: this.state.display}}>
          <div className="dropdown-row">
            <div className="link-box">
              <Link 
                to={"main/user/" + this.context.currentUser.id}
                className="show-link">
                View Profile
              </Link>
            </div>
          </div>
          <div className="dropdown-row">
            <div className="link-box">
              <div className="show-link" onClick={this.handleLogoutClick}>
                Sign Out
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = HeaderActionsUser;