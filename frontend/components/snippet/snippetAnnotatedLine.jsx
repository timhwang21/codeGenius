var React = require('react');
var Link = require('react-router').Link;
var History = require('react-router').History;

var SnippetAnnotatedLine = React.createClass({
  mixins: [History],

  handleClick: function(event) {
    event.stopPropagation();
  },

  render: function() {
    return(
      <span className="annotated-line" onClick={this.handleClick}>
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