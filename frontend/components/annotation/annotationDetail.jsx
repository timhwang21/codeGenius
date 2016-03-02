var React = require('react');

var AnnotationStore = require('../../stores/annotationStore.js');
var ApiUtil = require('../../util/ApiUtil.js');

var AnnotationDetail = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  getInitialState: function() {
    var id = parseInt(this.props.params.annotationId);
    return ({
      annotation: AnnotationStore.find(id) ? AnnotationStore.find(id) : {}
    });
  },

  componentDidMount: function() {
    var id = parseInt(this.props.params.annotationId);
    this.changeToken = AnnotationStore.addListener(this._onChange);
    ApiUtil.fetchSingleAnnotation(id);
  },

  componentWillUnmount: function() {
    this.changeToken.remove();
  },

  _onChange: function() {
    var id = parseInt(this.props.params.annotationId);
    this.setState({annotation: AnnotationStore.find(id)});
  },

  doNothing: function(event) {
    event.stopPropagation();
  },

  handleDelete: function(event) {
    event.preventDefault();
    var snippetId = parseInt(this.props.params.snippetId);
    var annotationId = parseInt(this.props.params.annotationId);
    ApiUtil.destroyAnnotation(annotationId);
    this.context.router.push("snippets/" + snippetId);
  },

  render: function() {
    return (
      <section className="snippet-col-right-pane" onClick={this.doNothing}>
        <header className="annotation-header">{this.state.annotation.title}</header>
        <article className="annotation-body">{this.state.annotation.body}</article>

        <div className="button-row" onClick={this.doNothing}>
          <button 
            className="square-button"
            onClick={this.handleEdit}
          >
            Edit
          </button>

          <button 
            className="square-button btn-delete"
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </div>
      </section>
    );
  }
});

module.exports = AnnotationDetail;