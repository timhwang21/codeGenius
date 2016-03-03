var React = require('react');
var Link = require('react-router').Link;

var SnippetLine = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleClick: function(event) {
    event.stopPropagation();
    // this.context.router.push(
    //   "/snippets/" + this.props.snippetId + "/annotations/new/" + this.props.lineIdx
    // );
    // // Change so clicking line itself will link
  },

  render: function() {
    return(
      <span className="line" onClick={this.handleClick}>
        <Link
          className="annotation-link"
          to={{
            pathname: "main/snippets/" + this.props.snippetId + "/annotations/new/" + this.props.lineIdx, 
            query: { title: this.props.line }}}
          >
          {this.props.line}
        </Link>
      </span>
    );
  }
});

module.exports = SnippetLine;