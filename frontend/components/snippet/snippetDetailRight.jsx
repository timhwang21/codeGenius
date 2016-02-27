var React = require('react');

var SnippetDetailRight = React.createClass({
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
    var snippet = this.state.snippet;
    if (typeof snippet.image_url !== 'undefined') {
      var image_url = (
        snippet.image_url === "" ? 
        "/assets/" + snippet.language_id :
        snippet.image_url  
        // TODO: refactor to use Cloudinary
      );
    }

    return (
      <article className="snippet-col-right-pane">
        <div className="snippet-img-box">
          <img src={image_url} className="snippet-img" />
        </div>
        <div className="snippet-desc word-wrap">
          {snippet.desc}
        </div>
      </article>
    );
  }



});

module.exports = SnippetDetailRight;