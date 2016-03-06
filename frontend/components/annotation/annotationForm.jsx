var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/ApiUtil.js');
var AnnotationStore = require('../../stores/annotationStore.js');

var AnnotationForm = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    lines: React.PropTypes.array
  },

  getInitialState: function() {
    if (this.props.params.annotationId) {
      var id = parseInt(this.props.params.annotationId);
      if (AnnotationStore.find(id)) {
        var annotation = AnnotationStore.find(id);
        return annotation;
      }
    }
    return {
      title: '',
      body: ''
    };
  },

  componentDidMount: function() {
    if (this.props.params.annotationId) {
      var id = parseInt(this.props.params.annotationId);
      this.changeToken = AnnotationStore.addListener(this._onChange);
      ApiUtil.fetchSingleAnnotation(id);
    }
    this.refs.annotationBody.focus();
  },

  componentWillUnmount: function() {
    if (this.changeToken) { this.changeToken.remove(); }
  },

  componentWillReceiveProps: function(newProps) {
    if (!this.props.params.annotationId) {
      this.setState({
        body: ''
      });
    }
  },

  _onChange: function() {
    var id = parseInt(this.props.params.annotationId);
    var annotation = AnnotationStore.find(id);
    this.setState(annotation);
    this.changeToken.remove();
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var snippetId = this.props.params.snippetId;
    var annotation = {
      body: this.state.body.trim(),
    };

    if (this.props.params.annotationId) {
      var annotationId = this.props.params.annotationId;
      this.editAnnotation(annotation);
      this.context.router.push("main/snippets/" + snippetId + "/annotations/" + annotationId);
    } else {
      this.createAnnotation(annotation);
    }
  },

  handleBack: function(event) {
    event.preventDefault();
    var snippetId = parseInt(this.props.params.snippetId);
    var annotationId = parseInt(this.props.params.annotationId);
    var route = "";
    if (annotationId) {
      route = "/annotations/" + annotationId;
    }
    this.context.router.push("main/snippets/" + snippetId + route);
  },

  createAnnotation: function(annotation) {
    var snippetId = this.props.params.snippetId;
    var lineIdx = this.props.params.lineIdx;
    annotation.author_id = this.context.currentUser.id;
    annotation.snippet_id = parseInt(snippetId);
    annotation.line_idx = parseInt(lineIdx);
    ApiUtil.createAnnotation(annotation, function(id) {
      this.context.router.push("main/snippets/" + snippetId + /annotations/ + id);
    }.bind(this));
  },

  editAnnotation: function(annotation) {
    var id = parseInt(this.props.params.annotationId);
    ApiUtil.updateAnnotation(id, annotation);
  },

  parseTitle: function() {
    if (this.props.params.lineIdx) {
      var lineIdx = parseInt(this.props.params.lineIdx); 
      return (this.context.lines ? this.context.lines[lineIdx].trim() : undefined);      
    } else {
      return this.state.title;
    }
  },

  render: function() {
    return (
      <form>  
        <header className="annotation-header-edit word-wrap">{this.parseTitle()}</header>

        <div className="annotation-body yellow word-wrap">
          <label htmlFor="annotation_body">Body</label>
          <textarea 
            ref="annotationBody"
            id="annotation_body"
            rows="10" 
            cols="43"
            placeholder="Enter annotation here... "
            valueLink={this.linkState("body")} />
        </div>

        <div className="button-row">
          <input 
            type="submit" 
            className="square-button btn-submit"
            onClick={this.handleSubmit}
            value="Save" 
          />

          <button 
            className="square-button btn-noborder"
            onClick={this.handleBack}
          >
            Back
          </button>
        </div>

      </form>
    );
  }
});

module.exports = AnnotationForm;