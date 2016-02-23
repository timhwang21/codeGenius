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


var Test = React.createClass({
  render: function() {
    return(    
      <section className="index-pane">  
        <header className="index-header">
          <p>Popular on codeGenius</p>
        </header>
        <ul>
          <li className="index-list-item">
            <a href="#" className="index-link">
              <span className="index-link-information">
                <span className="index-snippet-title">
                  Bubblesort
                </span>
                <span className="index-snippet-language">
                  Ruby
                </span>
              </span>
            </a>
            <div className="index-overlay" style={divRubyStyle}>
            </div>
          </li>

          <li className="index-list-item">
            <a href="#" className="index-link">
              <span className="index-link-information">
                <span className="index-snippet-title">
                  Mergesort
                </span>
                <span className="index-snippet-language">
                  Python
                </span>
              </span>
            </a>
            <div className="index-overlay" style={divPythonStyle}>
            </div>
          </li>

          <li className="index-list-item">
            <a href="#" className="index-link">
              <span className="index-link-information">
                <span className="index-snippet-title">
                  Heapsort
                </span>
                <span className="index-snippet-language">
                  Haskell
                </span>
              </span>
            </a>
            <div className="index-overlay" style={divHaskellStyle}>
            </div>
          </li>
        </ul>
      </section>
    );
  }
});

module.exports = Test;