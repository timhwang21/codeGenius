var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/ApiUtil.js');


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

    console.log("Params", userParams);
  },

  handleSignIn: function(event) {
    event.preventDefault();

    var userParams = {
      username: this.state.username,
      password: this.state.password
    };

    ApiUtil.fetchNewSession(userParams, function() {
      this.context.router.push("/main");
    }.bind(this));
  },

  handleDemo: function(event) {
    event.preventDefault();

    // change to have fancy typing
    var userParams = {
      username: 'demosthenes',
      password: 'demodemo'
    };

    ApiUtil.fetchNewSession(userParams, function() {
      this.context.router.push("/main");
    }.bind(this)); 
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
              Username&nbsp;
              <span id="equals">=&nbsp;</span> 

              <input 
                type="text" 
                className="login-form-input"
                ref="username"
                valueLink={this.linkState("username")} />
              ;
            </div>

            <div className="login-form-element">
              <label>Password</label>
              <span id="var">var&nbsp;</span> 
              Password&nbsp;
              <span id="equals">=&nbsp;</span> 

              <input 
                type="password" 
                className="login-form-input"
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