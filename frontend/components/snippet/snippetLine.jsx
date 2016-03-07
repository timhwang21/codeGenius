var React = require('react');
var Link = require('react-router').Link;

var animateScrollTop = function() {
  $("html, body").animate({scrollTop: "260px"}, 200);
};

var SnippetLine = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    loggedIn: React.PropTypes.bool
  },

  handleClick: function(event) {
    if (this.context.loggedIn && this.props.line.trim().length > 0) {
      animateScrollTop();
      this.context.router.push("main/snippets/" + this.props.snippetId + "/annotations/new/" + this.props.lineIdx)
      event.stopPropagation();
    }
  },

  render: function() {
    return(
      <div className="line-wrapper" onClick={this.handleClick}>
        <span className="line">
          {this.props.line}
        </span>
      </div>
    );
  }
});

module.exports = SnippetLine;