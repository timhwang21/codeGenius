var React = require('react');
var History = require('react-router').History;

var SnippetStore = require('../../stores/snippetStore.js')
var ApiUtil = require('../../util/ApiUtil.js');

var SnippetDetail = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return {snippet: {}};
  },

  componentDidMount: function() {
    this.snippetChangeToken = SnippetStore.addListener(this._onChange);
    ApiUtil.fetchSingleSnippet(this.props.params.snippetId);
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

    return (
      <section className="snippet-index">
        <div className="wrapper snippet-wrapper">
          <article className="col-left-pane">
            <header className="snippet-header-large">
              {this.state.snippet.title}
            </header>

            <header className="snippet-header-medium">
              {this.state.snippet.title}
            </header>

            <article className="snippet-body code">
              {this.state.snippet.body}

            </article>
          </article>
          <article className="col-right-pane">
            hello world
          </article>
        </div>
      </section>
    );
  }
});

module.exports = SnippetDetail;