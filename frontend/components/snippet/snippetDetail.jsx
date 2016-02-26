var React = require('react');
var History = require('react-router').History;
var Link = require('react-router').Link;
// var hljs = require('highlight.js');

var SnippetStore = require('../../stores/snippetStore.js')
var ApiUtil = require('../../util/ApiUtil.js');

var animateScrollTop = function() {
  $("html, body").animate({scrollTop: "0px"}, 200);
};

var SnippetDetail = React.createClass({
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
      <section className="snippet-index">
        <div className="snippet-wrapper">
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

            <button 
              className="square-button"
              onClick={this.handleEdit}
            >
              Edit
            </button>
          </article>
          <article className="snippet-col-right-pane">
            <div className="snippet-img-box">
              <img src={image_url} className="snippet-img" />
            </div>
            <div className="snippet-desc word-wrap">
              {snippet.desc}
            </div>
          </article>
        </div>
      </section>
    );
  }
});

module.exports = SnippetDetail;

// div 
//   className="snippet-img-box" 
//   style={{backgroundImage: "url(" + image_url + ")"}}
// /