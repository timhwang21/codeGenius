var React = require('react');
var Link = require('react-router').Link;
var History = require('react-router').History;

var SnippetBody = require('./snippetBody');

var SnippetDetailLeft = React.createClass({
  mixins: [History],

  handleEdit: function(event) {
    event.preventDefault();
    var id = this.props.snippet.id;
    this.history.push("snippets/" + id + "/edit");
  },

  handleBack: function(event) {
    event.preventDefault();
    this.history.push("/");
  },

  unfocusSnippet: function(event) {
    var id = this.props.snippet.id;
    this.history.push("snippets/" + id);
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
          <p>Author:&nbsp;<span className="link-box"><Link to={"users/" + snippet.author_id}>{snippet.author}</Link></span></p>
          <p>Views:&nbsp;{snippet.views}</p>
        </header>

        <SnippetBody snippet={snippet}/>

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