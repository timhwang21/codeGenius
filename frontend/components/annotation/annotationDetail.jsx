var React = require('react');
var History = require('react-router').History;

var AnnotationDetail = React.createClass({
  mixins: [History],

  handleBack: function() {
    var id = this.props.params.snippetId;
    this.history.push("snippets/" + id);
  },

  render: function() {
    return (
      <article className="snippet-col-right-pane">
        <div>Hello World I am annotationdetail</div>

        <button 
          className="square-button btn-noborder"
          onClick={this.handleBack}
        >
          Eventually clicking anywhere on the page will bring you back to the snippet index but for now you have to manually click this awful button
        </button>
      </article>
    );
  }
});

module.exports = AnnotationDetail;