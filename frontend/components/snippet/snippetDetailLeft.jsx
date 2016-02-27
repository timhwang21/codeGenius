var React = require('react');

var SnippetDetailLeft = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return {snippet: {}};
  },

  componentDidMount: function() {
    this.snippetChangeToken = SnippetStore.addListener(this._onChange);
    ApiUtil.fetchSingleSnippet(this.props.params.snippetId);
    animateScrollTop();
    // hljs.initHighlightingOnLoad()
  },

  componentWillUnmount: function() {
    this.snippetChangeToken.remove();
  },

  componentWillReceiveProps: function(nextProps) {
    ApiUtil.fetchSingleSnippet(nextProps.params.snippetId);
  },

  _onChange: function() {
    this.setState({snippet: SnippetStore.find(this.props.params.snippetId)});
  },

  handleEdit: function(event) {
    event.preventDefault();
    var id = this.props.params.snippetId;
    this.history.pushState(null, "snippets/" + id + "/edit", {});
  },

  handleBack: function(event) {
    event.preventDefault();
    this.history.goBack();
  },

  render: function() {
    return (
      <article className="snippet-col-left-pane">
        <header className="snippet-header-large">
          {snippet.title}
        </header>

        <header className="snippet-header-medium">
          {snippet.language}
        </header>

        <header className="snippet-header-text">
          <p>Author:&nbsp;<span className="link-box"><Link to={"users/" + snippet.author_id}>{snippet.author}</Link></span></p>
          <p>Views:&nbsp;{snippet.views}</p>
        </header>

        <article className="snippet-body">
          <pre><code>
            {snippet.body}
          </code></pre>
        </article>

        <div className="button-row">
          <button 
            className="square-button"
            onClick={this.handleEdit}
          >
            Edit
          </button>

          <button 
            className="square-button btn-noborder"
            onClick={this.handleBack}
          >
            Back
          </button>
        </div>
      </article>
    );
  }



});


module.exports = SnippetDetailLeft;