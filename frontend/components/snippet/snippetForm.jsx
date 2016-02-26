var React = require('react');
// var History = require('react-router').History;
var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/ApiUtil.js');
var LanguageStore = require('../../stores/languageStore.js');

var SnippetForm = React.createClass({
  // mixins: [History, LinkedStateMixin],
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      title: '',
      language_id: 1,
      image_url: '',
      body: '',
      desc: '',
      languages: []
    });
  },

  componentDidMount: function() {
    this.languageChangeToken = LanguageStore.addListener(this._onLanguageChange);
    ApiUtil.fetchAllLanguages();
  },

  componentWillUnmount: function() {
    this.languageChangeToken.remove();
  },

  _onLanguageChange: function() {
    this.setState({languages: LanguageStore.all()});
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var snippet = {
      author_id: 1, // pass in current user as prop; current_user.id
      language_id: this.state.language_id,
      title: this.state.title,
      image_url: this.state.image_url,
      body: this.state.body,
      desc: this.state.desc
    };

    debugger;
    if (this.props.params.id) {
      this.editSnippet(snippet);
    } else {
      this.createSnippet(snippet);
    }
  },

  createSnippet: function(snippet) {
    console.log("Snippet created: ", snippet);
    ApiUtil.createSnippet(snippet);
  },

  editSnippet: function(snippet) {
    console.log("Snippet edited: ", snippet);
    ApiUtil.updateSnippet(parseInt(this.props.params.id), snippet);
  },

  render: function() {
    return(
      <form className="snippet-form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="snippet_title">Title:</label>
          <input
            type="text"
            id="snippet_title"
            valueLink={this.linkState("title")}
          />
        </div>

        <div>
          <label htmlFor="snippet_language_id">Language:</label>
          <select id="snippet_language_id" valueLink={this.linkState("language_id")}>
            {this.state.languages.map(function (language, i) {
              return <option value={language.id} key={i}>{language.name}</option>;
            })}
          </select>
        </div>

        <div>
          <label htmlFor="snippet_image_url">Image URL:</label>
          <input
            type="text"
            id="snippet_image_url"
            valueLink={this.linkState("image_url")}
          />
        </div>

        <div>
          <label htmlFor="snippet_body">Body:</label>
          <textarea 
            id="snippet_body"
            rows="20" 
            cols="100" 
            valueLink={this.linkState("body")} />
        </div>

        <div>
          <label htmlFor="snippet_desc">Description:</label>
          <textarea 
            id="snippet_desc"
            rows="20" 
            cols="100" 
            valueLink={this.linkState("desc")} />
        </div>

        <div>
          <input type="submit" value={this.props.params.id ? "Edit snippet" : "Create snippet"} />
        </div>

      </form>
    );
  }
});

module.exports = SnippetForm;