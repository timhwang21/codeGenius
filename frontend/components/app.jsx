var React = require('react');

var Header = require('./header/header');

var SessionStore = require('../stores/sessionStore');
var ApiUtil = require('../util/ApiUtil');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  childContextTypes: {
    currentUser: React.PropTypes.object,
    handleLogOut: React.PropTypes.func,
    loggedIn: React.PropTypes.func,
    redirectToAuth: React.PropTypes.func,
    requireLoggedIn: React.PropTypes.func
  },

  getChildContext: function() {
    return {
      currentUser: this.state.currentUser,
      handleLogOut: this.handleLogOut,
      loggedIn: this.loggedIn,
      redirectToAuth: this.redirectToAuth,
      requireLoggedIn: this.requireLoggedIn
    };
  },

  getInitialState: function() {
    return {
      currentUser: {},
    }
  },

  componentDidMount: function() {
    this.changeToken = SessionStore.addListener(this._onChange);
    ApiUtil.checkSession();
  },

  componentWillUnmount: function() {
    this.changeToken.remove();
  },

  redirectToAuth: function() {
    this.context.router.push("/auth");
  },

  requireLoggedIn: function(callback) {
    if (!this.loggedIn()) {
      this.redirectToAuth;
    }
  },

  handleLogOut: function() {
    ApiUtil.destroySession();
    this.context.router.replace("/");
  },

  loggedIn: function() {
    debugger;
    !!this.context.currentUser.username;
  },

  _onChange: function() {
    this.setState({
      currentUser: SessionStore.getUser(),
    });
  },

  render: function() {
    return(
      <div className="app">
        <Header />
        {this.props.children}  
      </div>
    );
  }
});

module.exports = App;

