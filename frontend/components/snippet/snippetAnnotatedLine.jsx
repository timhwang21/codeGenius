var React = require('react');
var Link = require('react-router').Link;

var animateScrollTop = function() {
  $("html, body").animate({scrollTop: "260px"}, 200);
};

var animateScrollBot = function() {
  $("html, body").animate({scrollTop: $(document).height()}, 200);
};

var SnippetAnnotatedLine = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  handleClick: function(event) {
    if ($(document).width() > 1200) {
      animateScrollTop();
    } else {
      animateScrollBot();
    }
    this.context.router.push("main/snippets/" + this.props.snippetId + "/annotations/" + this.props.annotation.id)
    event.stopPropagation();
  },

  checkComment: function() {
    var commentMarkers = ["#", "% ", "! ", "\/\/", "' ", "--"];
    if (commentMarkers
        .map(marker => new RegExp("^\\s*" + marker))
        .some(regex => regex.test(this.props.line))) {
      return {color: "#75715e"}
    }
  },
 
  render: function() {
    return(
      <div className="line-wrapper" onClick={this.handleClick} style={this.checkComment()}>
        <span className="annotated-line">
            {this.props.line}
        </span>
      </div>
    );
  }
});

module.exports = SnippetAnnotatedLine;