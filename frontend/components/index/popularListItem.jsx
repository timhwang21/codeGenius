var React = require('react');
var Link = require('react-router').Link;

var divOverlay = function(idx) {
  if (idx !== 0) {
    return ({
      backgroundImage: 'url(/assets/' + idx + ')'
    });
  }
};

var PopularListItem = React.createClass({
  renderLoaded: function() {
    var snippet = this.props.snippet;
    var language = this.props.language;
    var overlayId = (this.props.klass === "popular-small" ? 0 : snippet.language_id);
    return(
      <li className={"popular-list-item " + this.props.klass}>
        <Link to={"snippets/" + snippet.id} className="popular-link">
          <span className="popular-link-information">
            <span className="popular-snippet-title">
              {snippet.title}
            </span>
            <span className="popular-snippet-detail">
              {language}
            </span>
          </span>
        </Link>
        <div className="popular-overlay" style={divOverlay(overlayId)} />
      </li>
    );
  },

  renderUnloaded: function() {
    return(
      <li className={"popular-list-item " + this.props.klass}>
        <span className="popular-link-information">
          <span className="popular-snippet-title">
            Loading...
          </span>
        </span>
        <div className="popular-overlay" style={divOverlay(0)} />
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