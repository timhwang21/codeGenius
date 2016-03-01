var React = require('react');
var Link = require('react-router').Link;


var SnippetAnnotatedLine = React.createClass({
  render: function() {
    return(
      <span className="annotated-line">
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