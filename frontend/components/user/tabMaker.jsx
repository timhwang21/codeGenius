var React = require('react');
var Link = require('react-router').Link;
var ApiUtil = require('../../util/apiUtil');
var Tabs = require('react-simpletabs');


var TabMaker = React.createClass({
  contextTypes: {
    router: React.PropTypes.object,
  },

  numSnippets: function() {
    return this.props.user.snippets ? this.props.user.snippets.length : 0;
  },

  numAnnotations: function() {
    return this.props.user.annotations ? this.props.user.annotations.length : 0;
  },

  handleSnippetEdit: function(id) {
    this.context.router.push("main/snippets/" + id + "/edit");
  },

  handleAnnotationEdit: function(snippetId, annotationId) {
    this.context.router.push("main/snippets/" + snippetId + "/annotations/" + annotationId + "/edit");
    console.log("mouse enter");
  },

  makeSnippetList: function(snippets) {
    var that = this;
    if (snippets) {
      return snippets.map((snippet, i) => that.makeSnippetListItem(snippet, i));
    }
  },

  makeSnippetListItem: function(snippet, i) {
    return (
      <div className="user-tab-row" key={i} id={i}>
        <div className="user-tab-header-container">
          <header className="user-tab-header-medium">
            <div className="tab-link-box">
              <Link
                to={"main/snippets/" + snippet.id}
                className="tab-link">
                {snippet.title}
              </Link>
            </div>
          </header>

          <header className="user-tab-header-small">
            <div className="tab-link-box">
              <Link
                to={"languages/" + snippet.language_id}
                className="tab-link">
                {snippet.language}
              </Link>
            </div>
          </header>
        </div>

        <div className="tab-button-row">
          <button 
            className="square-button btn-small btn-noborder"
            onClick={this.handleSnippetEdit.bind(null, snippet.id)}
          >
            Edit
          </button>
        </div>
      </div>
    );
  },

  makeAnnotationList: function(annotations) {
    var that = this;
    if (annotations) {
      return annotations.map((annotation, i) => that.makeAnnotationListItem(annotation, i));
    }
  },

  makeAnnotationListItem: function(annotation, i) {
    var body = annotation.body;
    
    return (
      <div className="user-tab-row" key={i} id={i}>
        <div className="user-tab-header-container">
          <header className="user-tab-header-medium">
            <div className="tab-link-box">
              <Link
                to={"main/snippets/" + annotation.snippet_id + "/annotations/" + annotation.id}
                className="tab-link">
                {annotation.title}
              </Link>
            </div>
          </header>
          <header className="user-tab-header-small">
            <div className="tab-link-box">
              <Link
                to={"main/snippets/" + annotation.snippet_id}
                className="tab-link">
                {annotation.snippet_title}
              </Link>
            </div>
          </header>
        </div>

        <content className="user-tab-text">
          {body}
        </content>

        <div className="tab-button-row">
          <button 
            className="square-button btn-small btn-noborder"
            onClick={this.handleAnnotationEdit.bind(this, annotation.snippet_id, annotation.id)}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }, 

  render: function() {
    return (
      <article className="user-col-right-pane">
        <Tabs>
          <Tabs.Panel title={"Snippets (" + this.numSnippets() + ")"}>
            <header>{this.makeSnippetList(this.props.user.snippets)}</header>
          </Tabs.Panel>
          <Tabs.Panel title={"Annotations (" + this.numAnnotations() + ")"}>
            <header>{this.makeAnnotationList(this.props.user.annotations)}</header>
          </Tabs.Panel>

        </Tabs>

      </article>
    );
  }  
});

module.exports = TabMaker;