var React = require('react');
var History = require('react-router').History;

var AnnotationDetail = React.createClass({
  mixins: [History],

  render: function() {
    return (
      <article className="snippet-col-right-pane">
        <div>Hello World I am annotationdetail</div>

        <button 
          className="square-button btn-noborder"
          onClick={this.handleClick}
        >
          test
        </button>

        <a href="http://www.google.com">Testtest</a>
      </article>
    );
  }
});

module.exports = AnnotationDetail;