var React = require('react');
var History = require('react-router').History;

var SnippetStore = require('../../stores/snippetStore.js')

var SnippetDetail = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return {snippet: {}};
  },

  componentDidMount: function() {
    // SnippetStore.addChangeListener(this._onChange);

  },



});

module.exports = SnippetDetail;