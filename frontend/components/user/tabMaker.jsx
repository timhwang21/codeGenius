var React = require('react');
var Link = require('react-router').Link;
var ApiUtil = require('../../util/ApiUtil');
var Tabs = require('react-simpletabs');


var TabMaker = React.createClass({
  contextTypes: {
    router: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    userId: React.PropTypes.string
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
    if (snippets && snippets.length > 0) {
      return snippets.map((snippet, i) => that.makeSnippetListItem(snippet, i));
    } else {
      return (
        <div className="user-tab-row empty" key="0" id="0">
          <div className="user-tab-header-container">
            <header className="user-tab-header-medium">
              <div className="tab-link-box">
                No snippets!
              </div>
            </header>

            <header className="user-tab-header-small">
              <div className="tab-link-box">
                <Link
                  to={"main/snippets/new"}
                  className="tab-link">
                  Go write one!
                </Link>
              </div>
            </header>
          </div>
        </div>
      );
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
                {snippet.title.length > 30 ? snippet.title.slice(0, 30) + "..." : snippet.title}
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

        {this.makeSnippetEditButton(snippet)}
      </div>
    );
  },

  makeSnippetEditButton: function(snippet) {
    if (this.context.currentUser.id === parseInt(this.context.userId)) {
      return (
        <div className="tab-button-row">
          <button 
            className="square-button btn-small btn-noborder"
            onClick={this.handleSnippetEdit.bind(null, snippet.id)}
          >
            Edit
          </button>
        </div>
      );
    }
  },

  makeAnnotationList: function(annotations) {
    var that = this;
    if (annotations && annotations.length > 0) {
      return annotations.map((annotation, i) => that.makeAnnotationListItem(annotation, i));
    } else {
      return (
        <div className="user-tab-row empty" key="0" id="0">
          <div className="user-tab-header-container">
            <header className="user-tab-header-medium">
              <div className="tab-link-box">
                No annotations!
              </div>
            </header>
          </div>

        </div>
      );
    }
  },

  makeAnnotationListItem: function(annotation, i) {
    debugger;
    var body = annotation.body;
    
    return (
      <div className="user-tab-row" key={i} id={i}>
        <div className="user-tab-header-container">
          <header className="user-tab-header-medium">
            <div className="tab-link-box">
              <Link
                to={"main/snippets/" + annotation.snippet_id + "/annotations/" + annotation.id}
                className="tab-link">
                {annotation.title.length > 30 ? annotation.title.slice(0, 30) + "..." : annotation.title}
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

        {this.makeAnnotationEditButton(annotation)}
      </div>
    );
  }, 

  makeAnnotationEditButton: function(annotation) {
    if (this.context.currentUser.id === parseInt(this.context.userId)) {
      return (
        <div className="tab-button-row">
          <button 
            className="square-button btn-small btn-noborder"
            onClick={this.handleAnnotationEdit.bind(this, annotation.snippet_id, annotation.id)}
          >
            Edit
          </button>
        </div>
      );
    }
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