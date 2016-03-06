var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/ApiUtil.js');

var background = {
  background: "rgba(255,100,100,.25)"
};

var noBackground = {
  background: "none"
};

var AuthPage = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    username: '',
    password: ''
  },

  contextTypes: {
    router: React.PropTypes.object,
    loggedIn: React.PropTypes.bool
  },

  getInitialState: function() {
    return this.blankAttrs;
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
    debugger;
    ApiUtil.createUser(userParams, this.handleSignInAfterSignUp)
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
    }.bind(this));
  },

  handleDemo: function(event) {
    event.preventDefault();
    var that = this;

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

  handleBack: function(event) {
    event.preventDefault();

    this.context.router.goBack();
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

            <div className="login-button-row">
              <button 
                className="square-button btn-submit login-button" 
                onClick={this.handleSignUp}
                id="btn1"
                value="Sign Up" >
                Sign Up
              </button>

              <button 
                className="square-button btn-submit login-button" 
                onClick={this.handleSignIn}
                id="btn2"
                value="Sign In" >
                Sign In
              </button>

              <button 
                className="square-button login-button" 
                onClick={this.handleDemo}
                id="btn3"
                value="Demo" >
                Demo
              </button>


              <button 
                className="square-button btn-noborder login-button" 
                onClick={this.handleBack}
                id="btn4"
                value="Back" >
                Back
              </button>
            </div>

          </form>
               
        </div>

      </div>

    );
  }
});

module.exports = AuthPage;