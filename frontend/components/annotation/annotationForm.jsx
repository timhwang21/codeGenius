var React = require('react');
var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/ApiUtil.js');
var AnnotationStore = require('../../stores/annotationStore.js');

var AnnotationForm = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    title: '',
    body: ''
  },

  contextTypes: {
    router: React.PropTypes.object
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
  },

  componentWillUnmount: function() {
    if (this.changeToken) { this.changeToken.remove(); }
  },

  componentWillReceiveProps: function(newProps) {
    if (!newProps.params.annotationId && this.props.params.annotationId) {
      this.setState(this.blankAttrs);
    }
  },

  _onChange: function() {
    var id = parseInt(this.props.params.annotationId);
    var annotation = AnnotationStore.find(id);
    this.setState({
      title: annotation.title,
      body: annotation.body
    });
    this.changeToken.remove();
  },

  handleSubmit: function(event) {
    event.preventDefault();
    console.log("Submitted!")
    // var snippet = {
    //   author_id: 1, // pass in current user as prop; current_user.id
    //   language_id: this.state.language_id,
    //   title: this.state.title.trim(),
    //   body: this.state.body.trim(),
    //   desc: this.state.desc.trim()
    // };

    // if (this.props.params.snippetId) {
    //   var id = this.props.params.snippetId;
    //   this.editSnippet(snippet);
    //   this.context.router.push("snippets/" + id);
    // } else {
    //   this.createSnippet(snippet);
    // }
  },

  handleBack: function(event) {
    event.preventDefault();
    var snippetId = parseInt(this.props.params.snippetId);
    var annotationId = parseInt(this.props.params.annotationId);
    this.context.router.push("snippets/" + snippetId + "/annotations/" + annotationId);
  },

  createAnnotation: function(annotation) {
    return true;
  },

  editAnnotation: function(annotation) {
    return true;
  },

  render: function() {
    // debugger;
    return (
      <form>  
        <header className="annotation-header">{this.state.title}</header>

        <div className="annotation-body yellow">
          <label htmlFor="annotation_body">Body</label>
          <textarea 
            id="annotation_body"
            rows="10" 
            cols="40" 
            placeholder="Enter code here... "
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