var React = require('react');

var IndexLeft = require('./indexLeft.jsx');
var IndexRight = require('./indexRight.jsx');
var PopularListItem = require('./popularListItem');

// var News = require('./news/news.jsx')

var SnippetStore = require('../../stores/snippetStore.js');
var LanguageStore = require('../../stores/languageStore.js');
var ApiUtil = require('../../util/ApiUtil.js');

var divOverlay = function(idx) {
  return ({
    backgroundImage: 'url(/assets/' + idx + ')'
  });
};

var Index = React.createClass({
  getInitialState: function() {
    return({
      snippets: SnippetStore.popular(22) ? SnippetStore.popular(22) : [],
      lastSnippet: SnippetStore.last() ? SnippetStore.last() : {},
      languages: LanguageStore.allObject() ? LanguageStore.allObject() : {},
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
    this.setState({snippets: SnippetStore.popular(22)});
    this.setState({lastSnippet: SnippetStore.last()});
  },

  _onLanguageChange: function() {
    this.setState({languages: LanguageStore.allObject()});
  },

  makePopularItem: function(snippet, i, klass) {
    var languages = this.state.languages;
    if (snippet) {
      return(
        <PopularListItem
          snippet={snippet}
          language={languages[snippet.language_id]}
          klass={klass}
          id={i}
          key={i} />
      );
    }
  },

  makePopularList: function(snippets, klass) {
    var that = this;
    var output = snippets.map(function(snippet, i) {
      return that.makePopularItem(snippet, i, klass);
    });
    return output;
  },

  render: function() {
    var snippets = this.state.snippets;
    var lastSnippet = this.state.lastSnippet;
    var largeItemLeft = this.makePopularItem(lastSnippet, 0, "popular-large");
    var popularWide = this.makePopularItem(snippets[0], 0, "popular-med-wide");
    var popularList = this.makePopularList(snippets.slice(1, 5), "popular-med");
    var popularSmallList = this.makePopularList(snippets.slice(6, 21), "popular-small");

    return(
      <section className="index">
        <div className="wrapper">
          <IndexLeft popularImage={largeItemLeft}/>
          <IndexRight 
            popularWide={popularWide}
            popularList={popularList}
            popularSmallList={popularSmallList}
          />
          {this.props.children}
        </div>
      </section>
    );
  }
});

module.exports = Index;