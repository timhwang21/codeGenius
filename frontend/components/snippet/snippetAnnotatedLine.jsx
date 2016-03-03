var React = require('react');
var Link = require('react-router').Link;

var SnippetAnnotatedLine = React.createClass({

  handleClick: function(event) {
    event.stopPropagation();
  },

  render: function() {
    //if history param == param for annotation, {state} = highlighted; if not, {state} = ""
    return(
      <span className="annotated-line" onClick={this.handleClick}>
        <Link
          className="annotation-link" 
          to={"main/snippets/" + this.props.snippetId + "/annotations/" + this.props.annotation.id}
          >
          {this.props.line}
        </Link>
      </span>
    );
  }
});

module.exports = SnippetAnnotatedLine;