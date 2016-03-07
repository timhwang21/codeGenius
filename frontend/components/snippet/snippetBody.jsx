var React = require('react');
var Link = require('react-router').Link;
var ApiUtil = require('../../util/ApiUtil.js');

var SnippetLine = require('./snippetLine');
var SnippetAnnotatedLine = require('./snippetAnnotatedLine');

var AnnotationStore = require('../../stores/annotationStore');

var SnippetBody = React.createClass({
  contextTypes: {
    lines: React.PropTypes.array
  },

  getInitialState: function() {
    return ({
      annotations: AnnotationStore.allByIndex().length > 0 ? AnnotationStore.allByIndex : []
    });
  },

  componentDidMount: function() {
    this.changeToken = AnnotationStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.changeToken.remove();
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.snippet !== this.props.snippet) {
      ApiUtil.fetchAnnotationsForSnippet(newProps.snippet.id);
    }
  },

  _onChange: function() {
    this.setState({annotations: AnnotationStore.allByIndex()});
  },

  makeBody: function(body) {
    var id = this.props.snippet.id;
    if (this.props.snippet.body) {
      var lines = this.context.lines;

      if (this.state.annotations.length !== 0) {
        var annotations = this.state.annotations;
        var annIdx = 0;

        return lines.map(function(line, i) {
          var lineComponent;
          if (annIdx < annotations.length && annotations[annIdx].line_idx === i) {
            lineComponent = line === "" ? 
              this.makeLine(id, line, i) :
              this.makeAnnotatedLine(id, annotations[annIdx], line);
            annIdx++;
          } else { lineComponent = this.makeLine(id, line, i); }
          return (
            <div className="snippet-body-line" id={i} key={i}>
              <span className="line-number noselect">{i}</span> 
              {lineComponent}
            </div>
          );
        }.bind(this));
      } else {
        return lines.map(function(line, i) {
          return (
            <div className="snippet-body-line" id={i} key={i}>
              <span className="line-number noselect">{i}</span> 
              {this.makeLine(id, line, i)}
            </div>
          );
        }.bind(this));
      }
    }
  },

  makeAnnotatedLine: function(snippetId, annotation, line) {
    return (
      <SnippetAnnotatedLine
        snippetId={snippetId}
        annotation={annotation}
        line={line} />
    );
  },

  makeLine: function(snippetId, line, lineIdx) {
    return (
      <SnippetLine 
        snippetId={snippetId}
        line={line}
        lineIdx={lineIdx} />
    );
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