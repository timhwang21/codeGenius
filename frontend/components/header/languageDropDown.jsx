var React = require('react');

var languageDropDown = React.createClass({
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
    return(
      <div>
        
      </div>
      );
  }
});

module.exports = languageDropDown;