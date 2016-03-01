var React = require('react');
var Link = require('react-router').Link;
var History = require('react-router').History;


var SnippetAnnotatedLine = React.createClass({
  mixins: [History],

  handleFocus: function() {
    this.history.push("/snippets/" + this.props.snippetId + "/annotations/" + this.props.annotationId);
  },

  handleBlur: function() {
    this.history.push("/snippets/" + this.props.snippetId);
  },

  render: function() {
    return(
      <span className="annotated-line" onFocus={this.handleFocus} onBlur={this.handleBlur}>
        <Link
          className="annotation-link" 
          to={"/snippets/" + this.props.snippetId + "/annotations/" + this.props.annotationId}
          >
          {this.props.line}
        </Link>
      </span>
    );
  }
});

module.exports = SnippetAnnotatedLine;