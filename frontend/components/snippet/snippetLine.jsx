var React = require('react');

var SnippetLine = React.createClass({

  render: function() {
    return(
      <span className="line">
        {this.props.line}
      </span>
    );
  }
});

module.exports = SnippetLine;