var React = require('react');
var Link = require('react-router').Link;

var HeaderActionsNoUser = React.createClass({
  contextTypes: {
    redirectToAuth: React.PropTypes.func
  },

  render: function() {
    return (
      <div className="header-actions">
        <div className="action-notification">
          <button 
            className="square-button btn-submit"
            onClick={this.context.redirectToAuth}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

});

module.exports = HeaderActionsNoUser;