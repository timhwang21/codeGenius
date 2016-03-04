var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/ApiUtil.js');

var UserBody = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object,
    body: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      body: this.context.body
    };
  },

  handleSubmit: function(event) {
    event.preventDefault();
    
    var id = this.props.params.userId;
    var body = this.state.body.trim();
    var user = {body: body};

    ApiUtil.updateUser(id, user);
    this.context.router.push("main/user/" + id);
  },

  render: function() {
    return (
      <div className="user-body">
        <textarea
          id="user_body"
          className="yellow"
          rows="3"
          cols="38"
          placeholder="Tell us about yourself!"
          valueLink={this.linkState("body")} />
        
        <div className="button-row">
          <button 
            className="square-button btn-submit"
            onClick={this.handleSubmit} >
            Save
          </button>
        </div>
      </div>
    );
  }
});

module.exports = UserBody;