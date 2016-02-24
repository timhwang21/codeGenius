// TODO: incorporate into splash page

var React = require('react');
var SnippetStore = require('../../stores/snippetStore.js');
var LanguageStore = require('../../stores/languageStore.js');
var ApiUtil = require('../../util/ApiUtil.js');

// COMPONENTS
var PopularListItem = require('./popularListItem');

var divOverlay = function(idx) {
  return ({
    backgroundImage: 'url(/assets/' + idx + ')'
  });
};

var Popular = React.createClass({
  getInitialState: function() {
    return({
      snippets: [],
      languages: {},
    });
  },

  componentDidMount: function() {
    this.snippetChangeToken = SnippetStore.addListener(this._onSnippetChange);
    ApiUtil.fetchAllSnippets();

    this.languageChangeToken = LanguageStore.addListener(this._onLanguageChange);
    ApiUtil.fetchAllLanguages();
  },

  componentWillUnmount: function() {
    this.snippetChangeToken.remove();
    this.languageChangeToken.remove();
  },

  _onSnippetChange: function() {
    this.setState({snippets: SnippetStore.popular(6)});
  },

  _onLanguageChange: function() {
    this.setState({languages: LanguageStore.all_object()});
  },

  makePopularList: function() {
    var languages = this.state.languages;
    var output = this.state.snippets.map(function(snippet, i) {
      return(
        <PopularListItem 
          snippet={snippet} 
          language={languages[snippet.language_id]}
          id={i} 
          key={i} />
      );
    });
    return output;
  },

  render: function() {
    return(    
      <article className="popular-pane">  
        <header className="popular-header">
          <p>Popular on codeGenius</p>
        </header>
        <ul className="popular-list">
          {this.makePopularList()}
        </ul>
      </article>
    );
  }
});

module.exports = Popular;