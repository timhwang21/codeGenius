var React = require('react');
var AnnotationForm = require('./annotationForm');

var AnnotationFormPage = React.createClass({

  doNothing: function(event) {
    event.stopPropagation();
  },

  parseTitle: function(query) {
    return query.slice(7);
  },

  render: function() {
    var query = this.props.location.search;

    return(
      <article className="snippet-col-right-pane" onClick={this.doNothing}>
        <AnnotationForm params={this.props.params} title={this.parseTitle(query)}/>
      </article>
    );
  }
});

module.exports = AnnotationFormPage;


