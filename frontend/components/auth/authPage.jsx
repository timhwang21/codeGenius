var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/ApiUtil.js');

var background = {
  borderBottom: "1px dotted rgba(255,100,100,.75)",
  background: "rgba(255,100,100,.25)"
};

var noBackground = {
  borderBottom: "1px solid rgba(0,0,0,0)",
  background: "none"
};

var AuthPage = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object,
    loggedIn: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      username: '',
      password: '',
      errors: '',
    };
  },

  componentDidMount: function() {
    this.refs.username.focus();
  },

  handleSignUp: function(event) {
    event.preventDefault();

    var userParams = {
      username: this.state.username,
      password: this.state.password
    };

    ApiUtil.createUser(userParams, this.handleSignInAfterSignUp, this.handleInvalidRequest)
  },

  handleSignInAfterSignUp: function(id) {
    var userParams = {
      username: this.state.username,
      password: this.state.password
    };


    ApiUtil.fetchNewSession(userParams, function() {
      localStorage.setItem('currentUser', this.state.username);
      this.context.router.push("/main/user/" + id);
    }.bind(this));
  },

  handleInvalidRequest: function() {
    this.setState({errors: "Invalid username or password!"})
  },

  handleSignIn: function(event) {
    if (event) {
      event.preventDefault();
    }

    var userParams = {
      username: this.state.username,
      password: this.state.password
    };


    ApiUtil.fetchNewSession(userParams, function() {
      localStorage.setItem('currentUser', this.state.username);
      this.context.router.push("/main");
    }.bind(this), this.handleInvalidRequest);
  },

  handleDemo: function(event) {
    event.preventDefault();
    var that = this;

    this.setState({
      username: '',
      password: ''
    });

    var username = "demosthenes".split("");
    var password = "demodemo".split("");
    var time = 50;

    username.forEach(function (letter) {
      time += 50;
      setTimeout(function () {
        that.setState({username: that.state.username + letter});
      }, time);
    });

    time += 500;

    password.forEach(function (letter) {
      time += 50;
      setTimeout(function () {
        that.setState({password: that.state.password + letter});
      }, time);
    });

    time += 500;

    setTimeout(this.handleSignIn, time);

  },

  render: function() {
    return (
      <div className="login-container">

        <video 
          id="bgvid" 
          autoPlay 
          loop
          poster="/assets/bgvideo-frame">
          <source src="http://res.cloudinary.com/code-genius/video/upload/v1456952528/codeGeniusBG_t5anlq.mp4" type="video/mp4"/>
        </video>

        <div className="login-form-container">

          <img className="login-form-logo noselect" src="/assets/codegenius-logo-transparent" height="189" width="678" draggable="false"/>

          <form className="login-form">

            <div className="login-form-element">
              <label>Username</label>
              <span id="var">var&nbsp;</span> 
              username&nbsp;
              <span id="equals">=&nbsp;</span> 

              <input 
                type="text" 
                className="login-form-input"
                ref="username"
                id="user-username"
                valueLink={this.linkState("username")} />
              ;
            </div>

            <div className="login-form-element">
              <label>Password</label>
              <span id="var">var&nbsp;</span> 
              password&nbsp;
              <span id="equals">=&nbsp;</span> 

              <input 
                type="password" 
                className="login-form-input"
                id="user-password"
                style={
                  this.state.password.length > 0 && this.state.password.length < 6
                  ? background
                  : noBackground}
                valueLink={this.linkState("password")} />
              ;
            </div>

            <div className="login-form-error">{this.state.errors}</div>

            <div className="login-button-row">

              <button 
                className="square-button btn-submit login-button" 
                onClick={this.handleSignIn}
                id="btn1"
                value="Sign In" >
                Sign In
              </button>

              <button 
                className="square-button btn-submit login-button" 
                onClick={this.handleSignUp}
                id="btn2"
                value="Sign Up" >
                Sign Up
              </button>

              <button 
                className="square-button login-button" 
                onClick={this.handleDemo}
                id="btn3"
                value="Demo" >
                Demo
              </button>

            </div>

          </form>
               
        </div>

      </div>

    );
  }
});

module.exports = AuthPage;