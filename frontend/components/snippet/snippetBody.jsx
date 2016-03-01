var React = require('react');
var Link = require('react-router').Link;

var SnippetLine = require('./snippetLine');
var SnippetAnnotatedLine = require('./snippetAnnotatedLine');

var SnippetBody = React.createClass({
  makeBody: function(body) {
    if (this.props.snippet.body) {
      var annotation_indices = this.props.snippet.annotations.map(annotation => annotation.line_idx); 
      var lines = body.split("\n");
      return lines.map(function(line, i) {
        return (
          <div className="snippet-body-line" id={i} key={i}>
            <span className="line-number noselect">{i}</span> 
            {
              (annotation_indices.includes(i) && line !== "") ?
              <SnippetAnnotatedLine 
                snippetId={this.props.snippet.id}
                annotationId={i}
                line={line}
                /> :
              <SnippetLine line={line}/>
            }
          </div>
        );
      }.bind(this));
    }
  },

  render: function() {
    var snippet = this.props.snippet;
    return(
      <article className="snippet-body">
        <pre><code>
          {this.makeBody(snippet.body)}
        </code></pre>
      </article>
    );
  }
});

module.exports = SnippetBody;