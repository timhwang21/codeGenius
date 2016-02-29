var React = require('react');
var AnnotationForm = require('./annotationForm');

var AnnotationFormPage = React.createClass({
  render: function() {
    return(
      <section className="snippet-index">
        <AnnotationForm params={this.props.params}/>
      </section>
    );
  }
});

module.exports = AnnotationFormPage;


