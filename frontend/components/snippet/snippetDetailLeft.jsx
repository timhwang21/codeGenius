var React = require('react');
var Link = require('react-router').Link;
var ApiUtil = require('../../util/ApiUtil');

var SnippetBody = require('./snippetBody');

function handleCodeLoaded() {
  var code = document.getElementById("code");
  if (code.innerHTML.length > 0) {
    hljs.highlightBlock(code);
  }
}

var SnippetDetailLeft = React.createClass({

  contextTypes: {
    router: React.PropTypes.object,
    currentUser: React.PropTypes.object,
  },

  handleHighlight: function(event) {
    handleCodeLoaded();
  },

  handleDownload: function(event) {
    var id = this.props.snippet.id;
    window.location = `api/snippets/${id}/download`;
  },

  handleEdit: function(event) {
    var id = this.props.snippet.id;
    this.context.router.push("/main/snippets/" + id + "/edit");
  },

  handleBack: function(event) {
    this.context.router.push("/main/");
  },

  handleDelete: function(event) {
    var id = this.props.snippet.id;
    ApiUtil.destroySnippet(id);
    this.context.router.push("/main/");
  },

  doNothing: function(event) {
    event.stopPropagation();
  },

  createButtonRow: function() {
    // debugger;
    if (this.context.currentUser.id === this.props.snippet.author_id) {
      return (
        <div className="button-row" onClick={this.doNothing}>
          <button 
            className="square-button btn-submit"
            onClick={this.handleDownload} >
            Download
          </button>

          <button 
            className="square-button"
            onClick={this.handleEdit} >
            Edit
          </button>

          <button 
            className="square-button btn-noborder"
            onClick={this.handleBack} >
            Back
          </button>

          <button 
            className="square-button btn-delete"
            onClick={this.handleDelete} >
            Delete
          </button>
        </div>
      );
    } else {
      return (
        <div className="button-row" onClick={this.doNothing}>
          <button 
            className="square-button btn-submit"
            onClick={this.handleDownload} >
            Download
          </button>

          <button 
            className="square-button btn-noborder"
            onClick={this.handleBack} >
            Back
          </button>
        </div>
      );
    }

  },

  render: function() {
    var snippet = this.props.snippet;

    return (
      <article className="snippet-col-left-pane">
        <header className="snippet-header-large">
          {snippet.title}
        </header>

        <header className="snippet-header-medium">
          {snippet.language}

          <button
            className="square-button btn-submit"
            onClick={this.handleHighlight} >
            Highlight
          </button>
        </header>

        <header className="snippet-header-text">
          <p>Author:&nbsp;
            <span className="link-box" onClick={this.doNothing}>
              <Link to={"main/user/" + snippet.author_id} className="show-link">
                {snippet.author}
              </Link>
            </span></p>
          <p>Views:&nbsp;{snippet.views}</p>
        </header>

        <SnippetBody snippet={snippet}/>

        {this.createButtonRow()}

      </article>
    );
  }
});

module.exports = SnippetDetailLeft;