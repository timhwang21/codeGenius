var React = require('react');
var Link = require('react-router').Link;

var SnippetBody = require('./snippetBody');

var SnippetDetailLeft = React.createClass({

  contextTypes: {
    // router: React.PropTypes.func
    router: React.PropTypes.object
  },

  handleEdit: function(event) {
    event.preventDefault();
    var id = this.props.snippet.id;
    this.context.router.push("snippets/" + id + "/edit");
  },

  handleBack: function(event) {
    event.preventDefault();
    this.context.router.push("/");
  },

  unfocusSnippet: function(event) {
    var id = this.props.snippet.id;
    this.context.router.push("snippets/" + id);
  },

  doNothing: function(event) {
    event.stopPropagation();
  },

  render: function() {
    var snippet = this.props.snippet;

    return (
      <article className="snippet-col-left-pane" onClick={this.unfocusSnippet}>
        <header className="snippet-header-large">
          {snippet.title}
        </header>

        <header className="snippet-header-medium">
          {snippet.language}
        </header>

        <header className="snippet-header-text">
          <p>Author:&nbsp;
            <span className="link-box" onClick={this.doNothing}>
              <Link to={"users/" + snippet.author_id}>{snippet.author}</Link>
            </span></p>
          <p>Views:&nbsp;{snippet.views}</p>
        </header>

        <SnippetBody snippet={snippet}/>

        <div className="button-row" onClick={this.doNothing}>
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