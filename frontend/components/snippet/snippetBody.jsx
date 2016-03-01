var React = require('react');
var Link = require('react-router').Link;

var SnippetLine = require('./snippetLine');
var SnippetAnnotatedLine = require('./snippetAnnotatedLine');

var AnnotationStore = require('../../stores/annotationStore');

var SnippetBody = React.createClass({
  getInitialState: function() {
    return {annotations: []};
  },

  componentDidMount: function() {
    this.changeToken = AnnotationStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.changeToken.remove();
  },

  componentWillReceiveProps: function(newProps) {
    // debugger; // why is this making my API spam requests?
    ApiUtil.fetchAnnotationsForSnippet(newProps.snippet.id);
  },

  _onChange: function() {
    this.setState({annotations: AnnotationStore.allByIndex()});
  },

  makeBody: function(body) {
    if (this.props.snippet.body) {
      var annotation_indices = this.props.snippet.annotations.map(annotation => annotation.line_idx); 
      var lines = body.split("\n");
      var snippetIdx = 0;

      // with each line, check if this.state.snippets[snippetIdx].lineIdx == line
      // if match, insert snippet, and snippetIdx++

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
    debugger;
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