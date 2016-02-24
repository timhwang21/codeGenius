// TODO: incorporate into splash page

var React = require('react');

var divRubyStyle = {
  backgroundImage: 'url(https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/ruby-512.png)'
};

var divPythonStyle = {
  backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png)'
};

var divHaskellStyle = {
  backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/2000px-Haskell-Logo.svg.png)'
};


var Popular = React.createClass({
  render: function() {
    return(    
      <article className="popular-pane">  
        <header className="popular-header">
          <p>Popular on codeGenius</p>
        </header>
        <ul className="popular-list">
          <li className="popular-list-item">
            <a href="#" className="popular-link">
              <span className="popular-link-information">
                <span className="popular-snippet-title">
                  Bubblesort
                </span>
                <span className="popular-snippet-language">
                  Ruby
                </span>
              </span>
            </a>
            <div className="popular-overlay" style={divRubyStyle}>
            </div>
          </li>

          <li className="popular-list-item">
            <a href="#" className="popular-link">
              <span className="popular-link-information">
                <span className="popular-snippet-title">
                  Mergesort
                </span>
                <span className="popular-snippet-language">
                  Python
                </span>
              </span>
            </a>
            <div className="popular-overlay" style={divPythonStyle}>
            </div>
          </li>

          <li className="popular-list-item">
            <a href="#" className="popular-link">
              <span className="popular-link-information">
                <span className="popular-snippet-title">
                  Heapsort
                </span>
                <span className="popular-snippet-language">
                  Haskell
                </span>
              </span>
            </a>
            <div className="popular-overlay" style={divHaskellStyle}>
            </div>
          </li>

          <li className="popular-list-item">
            <a href="#" className="popular-link">
              <span className="popular-link-information">
                <span className="popular-snippet-title">
                  Quicksort
                </span>
                <span className="popular-snippet-language">
                  Ruby
                </span>
              </span>
            </a>
            <div className="popular-overlay" style={divRubyStyle}>
            </div>
          </li>

          <li className="popular-list-item">
            <a href="#" className="popular-link">
              <span className="popular-link-information">
                <span className="popular-snippet-title">
                  Bubblesort
                </span>
                <span className="popular-snippet-language">
                  Haskell
                </span>
              </span>
            </a>
            <div className="popular-overlay" style={divHaskellStyle}>
            </div>
          </li>

          <li className="popular-list-item">
            <a href="#" className="popular-link">
              <span className="popular-link-information">
                <span className="popular-snippet-title">
                  Shittysort
                </span>
                <span className="popular-snippet-language">
                  Ruby
                </span>
              </span>
            </a>
            <div className="popular-overlay" style={divRubyStyle}>
            </div>
          </li>
        </ul>
      </article>
    );
  }
});

module.exports = Popular;