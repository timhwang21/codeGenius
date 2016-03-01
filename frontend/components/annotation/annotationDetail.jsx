var React = require('react');
var History = require('react-router').History;

var AnnotationStore = require('../../stores/annotationStore.js');
var ApiUtil = require('../../util/ApiUtil.js');

var AnnotationDetail = React.createClass({
  mixins: [History],

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

  render: function() {
    return (
      <article className="snippet-col-right-pane">
        <header className="annotation-header">{this.state.annotation.title}</header>
        <div>{this.state.annotation.body}</div>



        <a href="http://www.google.com">Testtest</a>

        <div className="button-row" onClick={this.doNothing}>
          <button 
            className="square-button"
            onClick={this.handleEdit}
          >
            Edit
          </button>

          <button 
            className="square-button btn-noborder"
            onClick={this.handleBack}
          >
            Delete
          </button>
        </div>
      </article>
    );
  }
});

module.exports = AnnotationDetail;