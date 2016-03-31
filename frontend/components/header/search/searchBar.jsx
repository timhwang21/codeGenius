var React = require('react');
var ReactDOM = require('react-dom');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ResultTable = require('./resultTable');

var SearchBar = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      filterText: '',
    };
  },

  makeResultTable: function() {
    if (this.state.filterText !== '') {
      return (     
        <div onClick={this.handleLinkClick}>   
          <ResultTable
            snippets={this.props.snippets}
            filterText={this.state.filterText}
            ref="resultTable" />
        </div>
      );
    }
  },

  focusSearchbar: function() {
    this.refs.filterTextInput.focus();
  },

  blurSearchbar: function() {
    this.setState({filterText: ''});
    this.refs.filterTextInput.blur();
  },

  handleClick: function (event) {  
    if (!ReactDOM.findDOMNode(this).contains(event.target)) {
      this.blurSearchbar();
    }
  },

  handleEsc: function (event) {
    if (event.keyCode === 27 || event.charCode === 27 || event.key === "Escape") {
      this.blurSearchbar();
    }
  },

  handleLinkClick: function(event) {
    if (event.target.tagName === "A") {
      this.focusSearchbar();
      setTimeout(this.blurSearchbar(), 1);
    }
  },

  componentDidMount: function() {
    document.addEventListener('click', this.handleClick, false);
  },

  componentWillUnmount: function() {
    document.removeEventListener('click', this.handleClick, false);
  },

  render: function() {
    return (
      <div>
        <form>
          <input
            type="text"
            ref="filterTextInput"
            className="searchbar yellow"
            placeholder="⌕ Search codeGenius..."
            onKeyDown={this.handleEsc}
            valueLink={this.linkState("filterText")}
          />

        </form>
        {this.makeResultTable()}
      </div>
    );
  }
});

module.exports = SearchBar;