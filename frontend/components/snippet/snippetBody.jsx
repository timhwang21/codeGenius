var React = require('react');
var Link = require('react-router').Link;

var SnippetLine = require('./snippetLine');
var SnippetAnnotatedLine = require('./snippetAnnotatedLine');

var AnnotationStore = require('../../stores/annotationStore');

var SnippetBody = React.createClass({
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
    // debugger; // why is this making my API spam requests?
    ApiUtil.fetchAnnotationsForSnippet(newProps.snippet.id);
  },

  _onChange: function() {
    this.setState({annotations: AnnotationStore.allByIndex()});
  },


  makeBody: function(body) {
    var id = this.props.snippet.id;
    if (this.props.snippet.body) {
      var lines = body.split("\n");

      if (this.state.annotations.length !== 0) {
        var annotations = this.state.annotations;
        var annIdx = 0;

        return lines.map(function(line, i) {
          var lineComponent;
          if (annIdx < annotations.length && annotations[annIdx].line_idx === i) {
            annIdx++;
            lineComponent = line === "" ? 
              this.makeLine(id, line) :
              this.makeAnnotatedLine(id, annIdx, line);
          } else { lineComponent = this.makeLine(id, line); }
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
              {this.makeLine(id, line)}
            </div>
          );
        }.bind(this));
      }
    }
  },

  makeAnnotatedLine: function(snippetId, annIdx, line) {
    return (
      <SnippetAnnotatedLine
        snippetId={snippetId}
        annotationId={annIdx}
        line={line} />
    );
  },

  makeLine: function(snippetId, line) {
    return (
      <SnippetLine 
        snippetId={snippetId}
        line={line} />
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