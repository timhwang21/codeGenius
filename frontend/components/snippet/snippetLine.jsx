var React = require('react');
var Link = require('react-router').Link;

var SnippetLine = React.createClass({
  handleClick: function(event) {
    event.stopPropagation();
  },

  render: function() {
    return(
      <span className="line" onClick={this.handleClick}>
        <Link
          className="annotation-link"
          to={"/snippets/" + this.props.snippetId + "/annotations/new"}
          >
          {this.props.line}
        </Link>
      </span>
    );
  }
});

module.exports = SnippetLine;