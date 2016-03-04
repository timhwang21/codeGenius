var React = require('react');
// var ReactTransition = require('react-addons-css-transition-group');
// var hljs = require('highlight.js');

var SnippetDetailLeft = require('./snippetDetailLeft');
var SnippetDetailRight = require('./snippetDetailRight');

var SnippetStore = require('../../stores/snippetStore');
var ApiUtil = require('../../util/ApiUtil');

var animateScrollTop = function() {
  $("html, body").animate({scrollTop: "0px"}, 200);
};

var SnippetDetail = React.createClass({

  getInitialState: function() {
    var id = parseInt(this.props.params.snippetId);
    return ({
      snippet: SnippetStore.find(id) || {}
    });
  },

  childContextTypes: {
    imgUrl: React.PropTypes.string,
    lines: React.PropTypes.array,
    desc: React.PropTypes.string
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  getChildContext: function() { 
    return {
      imgUrl: this.imgUrl(),
      lines: this.state.snippet.body ? this.state.snippet.body.split("\n") : undefined,
      desc: this.state.snippet.desc
    };
  },

  componentDidMount: function() {
    var id = parseInt(this.props.params.snippetId);
    this.changeToken = SnippetStore.addListener(this._onChange);
    ApiUtil.fetchSingleSnippet(id);
    ApiUtil.incrementViewCount(id);
    animateScrollTop();
  },

  componentWillUnmount: function() {
    this.changeToken.remove();
  },

  componentWillReceiveProps: function(newProps) {
    ApiUtil.fetchSingleSnippet(newProps.params.snippetId);
  },

  _onChange: function() {
    var id = parseInt(this.props.params.snippetId);
    this.setState({snippet: SnippetStore.find(id)});
  },

  unfocusSnippet: function(event) {
    var id = this.props.params.snippetId;
    this.context.router.push("main/snippets/" + id);
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
      <section className="snippet-index" onClick={this.unfocusSnippet}>
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