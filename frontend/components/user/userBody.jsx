var React = require('react');

var UserBody = React.createClass({
  contextTypes: {
    router: React.PropTypes.object,
    body: React.PropTypes.string,
    currentUser: React.PropTypes.object
  },

  createEditButton: function() {
    if (this.context.currentUser.id === parseInt(this.props.params.userId)) {
      return (
        <div className="button-row">
          <button 
            className="square-button"
            onClick={this.handleEdit} >
            Edit
          </button>
        </div>
      );
    }
  },

  handleEdit: function() {
    var id = this.props.params.userId;
    this.context.router.push("main/user/" + id + "/edit")
  },

  render: function() {
    return (
      <div className="user-body word-wrap">
        {this.context.body || "Tell us about yourself!"}
        {this.createEditButton()}

      </div>
    );
  }
});

module.exports = UserBody;