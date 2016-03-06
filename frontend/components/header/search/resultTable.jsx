var React = require('react'); 
var Link = require('react-router').Link;

var ResultTable = React.createClass({
  makeRows: function() {
    return this.props.results.map(function(result, i) {
      if (result.indexOf(this.props.filterText) >= 0) {
        return(
          <div className="dropdown-row" key={result}>
            <div className="link-box">
              <Link
                to="#"
                className="show-link">
                {result}
              </Link>
            </div>
          </div>
        );
      }
    }.bind(this));
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