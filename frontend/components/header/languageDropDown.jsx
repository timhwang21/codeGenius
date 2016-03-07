var React = require('react');
var ApiUtil = require('../../util/ApiUtil.js');

var LanguageDropDown = React.createClass({
  getInitialState: function() {
    return({
      languages: [],
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

  render: function() {
    var all = this.state.languages.map(function(language, i) {
      var link = "api/languages/" + language.id;
      return (
        <div className="nav-link-box">
          <a href={link} className="nav-menu-sub-link">
            {language.name}
          </a>
        </div>
      );
    });

    return(
      <nav className="nav-menu-sub">
        {all}
      </nav>
    );
  }
});

module.exports = LanguageDropDown;