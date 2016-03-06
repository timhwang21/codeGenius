var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ResultTable = require('./resultTable');

var SearchBar = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      filterText: '',
    };
  },

  render: function() {
    return (
      <div>
        <form>
          <input
            type="text"
            ref="filterTextInput"
            placeholder="Search..."
            valueLink={this.linkState("filterText")}
          />

        </form>
        <ResultTable
          results={this.props.results}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
});

module.exports = SearchBar;