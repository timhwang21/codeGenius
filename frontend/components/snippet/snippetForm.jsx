var React = require('react');
var History = require('react-router').History;
var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/ApiUtil.js');
var SnippetStore = require('../../stores/snippetStore.js');
var LanguageStore = require('../../stores/languageStore.js');

var SnippetForm = React.createClass({
  mixins: [History, LinkedStateMixin],

  blankAttrs: {
    title: '',
    language_id: 1,
    image_url: '',
    body: '',
    desc: '',
    languages: []
  },

  getInitialState: function() {
    if (this.props.params.snippetId) {
      var id = parseInt(this.props.params.snippetId);
      if (SnippetStore.find(id)) {
        var snippet = SnippetStore.find(id);
        snippet.languages = [];
        return snippet;
      } 
    }
    return this.blankAttrs;
  },

  componentDidMount: function() {
    if (this.props.params.snippetId) {
      var id = parseInt(this.props.params.snippetId);
      this.snippetChangeToken = SnippetStore.addListener(this._onSnippetChange);
      ApiUtil.fetchSingleSnippet(id);
    }
    this.languageChangeToken = LanguageStore.addListener(this._onLanguageChange);
    ApiUtil.fetchAllLanguages();
    this.refs.snippetTitle.focus();
  },

  componentWillUnmount: function() {
    if (this.snippetChangeToken) {
      this.snippetChangeToken.remove();
    }
    this.languageChangeToken.remove();
  },

  _onSnippetChange: function() {
    var snippet = SnippetStore.find(this.props.params.snippetId);
    this.setState({
      title: snippet.title,
      language_id: snippet.language_id,
      image_url: snippet.image_url,
      body: snippet.body,
      desc: snippet.desc
    });
  },

  _onLanguageChange: function() {
    this.setState({languages: LanguageStore.all()});
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var snippet = {
      author_id: 1, // pass in current user as prop; current_user.id
      language_id: this.state.language_id,
      title: this.state.title.trim(),
      image_url: this.state.image_url.trim(),
      body: this.state.body.trim(),
      desc: this.state.desc.trim()
    };

    if (this.props.params.snippetId) {
      var id = this.props.params.snippetId;
      this.editSnippet(snippet);
      this.history.push("snippets/" + id);
    } else {
      this.createSnippet(snippet);
    }
  },

  handleBack: function(event) {
    event.preventDefault();
    this.history.goBack();
  },

  createSnippet: function(snippet) {
    // console.log("Snippet created: ", snippet);
    ApiUtil.createSnippet(snippet, function(id) {
      this.history.push("snippets/" + id);
    }.bind(this));
  },

  editSnippet: function(snippet) {
    var id = parseInt(this.props.params.snippetId);
    // console.log("Snippet edited: ", snippet);
    ApiUtil.updateSnippet(id, snippet);
  },

  render: function() {
    return(
      <form hidden className="snippet-form">
        <div className="snippet-wrapper">
          <article className="snippet-col-left-pane">
            <div>
              <label htmlFor="snippet_title">Title</label>
              <input
                className="snippet-header-large yellow"
                type="text"
                ref="snippetTitle"
                id="snippet_title"
                placeholder="New Snippet..."
                valueLink={this.linkState("title")}
              />
            </div>

            <header className="snippet-header-medium">
              Select Language:
            </header>

            <label htmlFor="snippet_language_id">Language</label>
            <div className="snippet-select-language-box">
              <select id="snippet_language_id" valueLink={this.linkState("language_id")}>
                {this.state.languages.map(function (language, i) {
                  return (
                    <option 
                      value={language.id} 
                      key={i}
                    >
                      {language.name}
                    </option>);
                })}
              </select>
            </div>

            <div className="snippet-body yellow">
              <label htmlFor="snippet_body">Body</label>
              <textarea 
                id="snippet_body"
                rows="20" 
                cols="68" 
                placeholder="Enter code here... "
                valueLink={this.linkState("body")} />
            </div>

            
            <div className="button-row">
              <input 
                type="submit" 
                className="square-button btn-submit"
                onClick={this.handleSubmit}
                value="Save" 
              />

              <button 
                className="square-button btn-noborder"
                onClick={this.handleBack}
              >
                Back
              </button>
            </div>

          </article>
          <article className="snippet-col-right-pane">
            <div className="snippet-img-box">
              <label htmlFor="snippet_image_url">Image URL</label>
              <input
                className="temp yellow"
                type="text"
                id="snippet_image_url"
                placeholder="Image URL: (replace with Cloudinary!) "
                valueLink={this.linkState("image_url")}
              />
            </div>
            <div>
              <label htmlFor="snippet_desc">Description</label>
              <textarea 
                className="yellow"
                id="snippet_desc"
                rows="20" 
                cols="43"
                placeholder="Enter description here..."
                valueLink={this.linkState("desc")} />
            </div>
          </article>
        </div>
    
      </form>
    );
  }
});

module.exports = SnippetForm;