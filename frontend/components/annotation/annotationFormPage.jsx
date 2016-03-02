var React = require('react');
var AnnotationForm = require('./annotationForm');

var AnnotationFormPage = React.createClass({

  doNothing: function(event) {
    event.stopPropagation();
  },

  render: function() {
    return(
      <article className="snippet-col-right-pane" onClick={this.doNothing}>
        <AnnotationForm params={this.props.params}/>
      </article>
    );
  }
});

module.exports = AnnotationFormPage;


