var React = require('react');
var Link = require('react-router').Link;

var SnippetLine = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleClick: function(event) {
    this.context.router.push("main/snippets/" + this.props.snippetId + "/annotations/new/" + this.props.lineIdx)
    event.stopPropagation();
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