var React = require('react');
var SnippetForm = require('./snippetForm');

var animateScrollTop = function() {
  $("html, body").animate({scrollTop: "0px"}, 200);
};

var SnippetFormPage = React.createClass({
  componentDidMount: function() {
    animateScrollTop();
  },

  render: function() {
    return(
      <section className="snippet-index">
        <SnippetForm params={this.props.params}/>
      </section>
    );
  }
});

module.exports = SnippetFormPage;


