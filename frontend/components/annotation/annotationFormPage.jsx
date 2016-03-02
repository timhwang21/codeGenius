var React = require('react');
var AnnotationForm = require('./annotationForm');

var AnnotationFormPage = React.createClass({

  getInitialState: function() {
    return ({
      title: this.parseTitle(this.props.location.search)
    });
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({
      title: this.parseTitle(newProps.location.search)
    });
  },

  doNothing: function(event) {
    event.stopPropagation();
  },

  parseTitle: function(query) {
    return decodeURIComponent(query.slice(7).replace(/\+/g, " ").trim());
  },

  render: function() {
    return(
      <article className="snippet-col-right-pane" onClick={this.doNothing}>
        <AnnotationForm params={this.props.params} title={this.state.title}/>
      </article>
    );
  }
});

module.exports = AnnotationFormPage;


