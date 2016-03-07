var React = require('react'); 
var Link = require('react-router').Link;

var ResultTable = React.createClass({
  makeRows: function() {
    var rows = [];
    this.props.snippets.forEach(function(snippet, i) {
      if (snippet.title.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0) {
        rows.push(
          <div className="search-row" key={snippet.title}>
            <div className="link-box">
              <Link
                to={"main/snippets/" + snippet.id}
                className="show-link">
                {snippet.title.length > 30 ? snippet.title.slice(0, 27) + "..." : snippet.title}
              </Link>
            </div>
            <div className="search-row-language">
              {snippet.language}
            </div>
          </div>
        );
      }
    }.bind(this));

    if (rows.length > 0) {
      return rows.slice(0, 10);
    } else {
      return (
        <div className="search-row" key="row">
          No results
        </div>
      );
    }
  },

  render: function() {

    return (
      <div className="search-dropdown">
        {this.makeRows()}
      </div>
    );
  }
});

module.exports = ResultTable;