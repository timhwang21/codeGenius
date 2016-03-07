var React = require('react');
var Link = require('react-router').Link;

var AnnotationStore = require('../../stores/annotationStore.js');
var ApiUtil = require('../../util/ApiUtil.js');

var AnnotationDetail = React.createClass({
  contextTypes: {
    router: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    lines: React.PropTypes.array
  },

  getInitialState: function() {
    var id = parseInt(this.props.params.annotationId);
    return ({
      annotation: AnnotationStore.find(id) || {}
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

  // componentWillReceiveProps: function(newProps) {
  //   debugger;
  // },

  _onChange: function() {
    var id = parseInt(this.props.params.annotationId);
    this.setState({annotation: AnnotationStore.find(id)});
  },

  doNothing: function(event) {
    event.stopPropagation();
  },

  handleEdit: function(event) {
    var snippetId = parseInt(this.props.params.snippetId);
    var annotationId = parseInt(this.props.params.annotationId);
    this.context.router.push("main/snippets/" + snippetId + "/annotations/" + annotationId + "/edit");
  },

  handleDelete: function(event) {
    var snippetId = parseInt(this.props.params.snippetId);
    var annotationId = parseInt(this.props.params.annotationId);
    ApiUtil.destroyAnnotation(annotationId);
    this.context.router.push("main/snippets/" + snippetId);
  },

  createButtonRow: function() {
    if (this.context.currentUser.id === this.state.annotation.author_id) {
      return (
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
      );
    }
  },

  parseTitle: function() {
    if (typeof this.state.annotation.line_idx !== 'undefined') {
      var lineIdx = this.state.annotation.line_idx; 
      return (this.context.lines ? this.context.lines[lineIdx].trim() : undefined);      
    } 
  },

  render: function() {
    return (
      <section className="snippet-col-right-pane annotation-detail" onClick={this.doNothing}>
        <header className="annotation-header">{this.state.annotation.title}</header>

        <header className="snippet-header-text">
          <p>Author:&nbsp;
            <span className="link-box" onClick={this.doNothing}>
              <Link to={"main/user/" + this.state.annotation.author_id} className="show-link">
                {this.state.annotation.author}
              </Link>
            </span></p>
        </header>

        <article className="annotation-body word-wrap">{this.state.annotation.body}</article>

        {this.createButtonRow()}
      </section>
    );
  }
});

module.exports = AnnotationDetail;