var React = require('react');

var divOverlay = function(idx) {
  return ({
    backgroundImage: 'url(/assets/' + idx + ')'
  });
};

var PopularListItem = React.createClass({

  renderLoaded: function() {
    var snippet = this.props.snippet;
    var language = this.props.language;

    return(
      <li className="popular-list-item">
        <a href={"api/snippets/" + snippet.id} className="popular-link">
          <span className="popular-link-information">
            <span className="popular-snippet-title">
              {snippet.title}
            </span>
            <span className="popular-snippet-detail">
              {language.name}
            </span>
          </span>
        </a>
        <div className="popular-overlay" style={divOverlay(snippet.language_id)}>
        </div>
      </li>
    );
  },

  renderUnloaded: function() {
    return(
      <li className="popular-list-item">
        <a href="#" className="popular-link">
          <span className="popular-link-information">
            <span className="popular-snippet-title">
              Loading...
            </span>
          </span>
        </a>
        <div className="popular-overlay" style={divOverlay(0)}>
        </div>
      </li>
    );
  },

  render: function() {
    if (this.props.snippet && this.props.language) {
      return this.renderLoaded();
    } else {
      return this.renderUnloaded();
    }
  }
});

module.exports = PopularListItem;