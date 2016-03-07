var React = require('react');
var Link = require('react-router').Link;

var animateScrollTop = function() {
  $("html, body").animate({scrollTop: "260px"}, 200);
};

var SnippetAnnotatedLine = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  handleClick: function(event) {
    animateScrollTop();
    this.context.router.push("main/snippets/" + this.props.snippetId + "/annotations/" + this.props.annotation.id)
    event.stopPropagation();
  },

  render: function() {
    // debugger;
    //if history param == param for annotation, {state} = highlighted; if not, {state} = ""
    return(
      <div className="line-wrapper" onClick={this.handleClick}>
        <span className="annotated-line">
            {this.props.line}
        </span>
      </div>
    );
  }
});

module.exports = SnippetAnnotatedLine;