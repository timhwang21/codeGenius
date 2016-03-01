var React = require('react');
var AnnotationForm = require('./annotationForm');

var AnnotationFormPage = React.createClass({
  render: function() {
    return(
      <article className="snippet-col-right-pane">
        <AnnotationForm params={this.props.params}/>
      </article>
    );
  }
});

module.exports = AnnotationFormPage;


