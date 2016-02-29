var React = require('react');
var Link = require('react-router').Link;
// var hljs = require('highlight.js');

var SnippetDetailLeft = require('./snippetDetailLeft');
var SnippetDetailRight = require('./snippetDetailRight');

var SnippetStore = require('../../stores/snippetStore.js');
var ApiUtil = require('../../util/ApiUtil.js');

var animateScrollTop = function() {
  $("html, body").animate({scrollTop: "0px"}, 200);
};

var SnippetDetail = React.createClass({

  getInitialState: function() {
    var id = parseInt(this.props.params.snippetId);
    return ({
      snippet: SnippetStore.find(id) ? SnippetStore.find(id) : {}
    });
  },

  childContextTypes: {
    imgUrl: React.PropTypes.string,
    desc: React.PropTypes.string
  },

  getChildContext: function() { // I'm afraid desc will be undefined if snippet isn't fetched yet
    return {
      imgUrl: this.imgUrl(),
      desc: this.state.snippet.desc
    };
  },

  componentDidMount: function() {
    var id = parseInt(this.props.params.snippetId);

    this.snippetChangeToken = SnippetStore.addListener(this._onChange);
    ApiUtil.fetchSingleSnippet(id);
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
    var id = parseInt(this.props.params.snippetId);
    this.setState({snippet: SnippetStore.find(id)});
  },

  imgUrl: function() {
    var snippet = this.state.snippet;
    if (typeof snippet.language_id !== 'undefined') {
      return "/assets/" + snippet.language_id;
    }
  },

  render: function() {
    var snippet = this.state.snippet;
    return (
      <section className="snippet-index">
        <div className="snippet-wrapper">
          <SnippetDetailLeft snippet={snippet} />
          {this.props.children}
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