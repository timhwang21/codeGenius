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

    if (this.props.params.id) {
      this.editSnippet(snippet);
    } else {
      this.createSnippet(snippet);
    }

    // also push to history
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
      <form hidden className="snippet-form" onSubmit={this.handleSubmit}>
        <div className="snippet-wrapper">
          <article className="snippet-col-left-pane">
            <div>
              <label htmlFor="snippet_title">New Snippet</label>
              <input
                className="snippet-header-large"
                type="text"
                id="snippet_title"
                placeholder="Title: "
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

            
            <div>
              <input 
                type="submit" 
                onClick={this.handleSubmit}
                value={this.props.params.id ? "Edit snippet" : "Create snippet"} 
              />
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