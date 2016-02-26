var React = require('react');
var SnippetForm = require('./snippetForm');

var SnippetFormPage = React.createClass({
  render: function() {
    return(
      <section className="snippet-index">
        <SnippetForm params={this.props.params}/>
      </section>
    );
  }
});

module.exports = SnippetFormPage;


