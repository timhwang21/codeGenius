var React = require('react');

var SnippetDetailRight = React.createClass({
  render: function() {
    return (
      <article className="snippet-col-right-pane">
        <div className="snippet-img-box">
          <img src={this.props.imgUrl} className="snippet-img" />
        </div>
        <div className="snippet-desc word-wrap">
          {this.props.desc}
        </div>
      </article>
    );
  }
});

module.exports = SnippetDetailRight;