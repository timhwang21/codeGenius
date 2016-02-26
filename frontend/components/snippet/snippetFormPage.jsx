var React = require('react');
var SnippetForm = require('./snippetForm');

var SnippetFormPage = React.createClass({
  render: function() {
    return(
      <div>
        <SnippetForm params={this.props.params}/>
      </div>
    );
  }
});

module.exports = SnippetFormPage;