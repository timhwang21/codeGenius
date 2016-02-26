var React = require('react');
// var History = require('react-router').History;
var Link = require('react-router').Link;
// var hljs = require('highlight.js');

var SnippetStore = require('../../stores/snippetStore.js')
var ApiUtil = require('../../util/ApiUtil.js');

var testImg = "/assets/9";

var animateScrollTop = function() {
  $("html, body").animate({scrollTop: "0px"}, 200);
};

var SnippetDetail = React.createClass({
  // mixins: [History],

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

  render: function() {
    var snippet = this.state.snippet;
    var title = snippet.title
    var author = snippet.author;
    var author_id = snippet.author_id;
    var views = snippet.views;
    var body = snippet.body;
    var desc = snippet.desc;

    return (
      <section className="snippet-index">
        <div className="snippet-wrapper">
          <article className="snippet-col-left-pane">
            <header className="snippet-header-large">
              {title}
            </header>

            <header className="snippet-header-medium">
              Language
            </header>

            <header className="snippet-header-text">
              <p>Author:&nbsp;<span className="link-box"><Link to={"users/" + author_id}>{author}</Link></span></p>
              <p>Views:&nbsp;{views}</p>
            </header>

            <article className="snippet-body">
              <pre><code className="js">
                {body}
              </code></pre>
            </article>
          </article>
          <article className="snippet-col-right-pane">
            <div><img src={testImg} height="280" width="280"className="test" /></div>
            <div>
              {desc}
            </div>
          </article>
        </div>
      </section>
    );
  }
});

module.exports = SnippetDetail;