var React = require('react');

var IndexLeft = React.createClass({
  render: function() {
    return(    
      <article className="col-left-pane">
        <header className="header-small">
          <p>Latest on codeGenius</p>
        </header>

        <ul className="popular-list">
          {this.props.popularImage}
        </ul>

        <header className="header-large">
          <p>Newest features</p>
        </header>

        <article className="index-article">
          <div>
            codeGenius now supports&nbsp;
            <span className="link-box">
              <a href="http://www.code-geni.us/#/main/snippets/41" className="body-link">
                comment highlighting
              </a>
            </span>, 
            one of the more requested features! Additionally, stuff under the hood has been improved: the searchbar 
            now works more logically, extraneous API calls have been reduced to improve loading speed, and copying 
            no longer includes line numbers.
          </div>

          <div>
            Moving forwards, the most important feature on the roadmap is to improve navigation. As codeGenius 
            transitions from being a hobby project to a functional site, finding and accessing snippets needs to 
            be made easier. This includes: creating a dedicated search page, creating index pages for languages, 
            and adding tagging functionalities. Also on the to-do list are comments and User IQ.
          </div>

          <div>
            Until next time!
          </div>

        </article>

        <header className="header-large">
          <p>Adding & annotating snippets</p>
        </header>

        <article className="index-article">
          <div>
            The purpose of codeGenius is to serve as an online knowledge base for code. 
            Users can upload snippets of code for others to view and annotate. By 
            annotating code snippets, users can provide more in-depth explanations for 
            their code that may not be apparent at first glance. 
          </div>

          <div>
            After signing in, click on the "Add Snippet" link in the center of the nav 
            bar to begin writing your first snippet! Try to give your snippet a descriptive 
            title and description. Once you're finished, hit "Save." It's that easy! Now 
            that your snippet is saved, you can edit or delete the snippet from its page.
          </div>

          <div>
            Once you've successfully created your snippet, you can start annotating it! 
            Click on any line in your snippet to begin writing an annotation. Annotations 
            are explanations, thoughts, or general notes that are bound to individual lines 
            of code in snippets. Try clicking on a line in your new snippet and adding your 
            thoughts! Be sure to save once you've finished.
          </div>

          <div>
            Congratulations! You're now ready to start annotating the world!
          </div>
        </article>

        <header className="header-large">
          <p>The story behind codeGenius</p>
        </header>

        <article className="index-article">
          <div>
            codeGenius is inspired by both Rapgenius, a lyrics annotation website, and 
            Rosettacode.org, a website which provides solutions to programming problems 
            in a wide variety of languages. The motivation to create codeGenius came from 
            the fact that while websites like Rosettacode present a valuable resource 
            for beginning programmers, they often fail to provide the in-depth guidance 
            needed to promote a deep level of understanding. When I was first learning to 
            program, I found myself wishing for more in-depth notes for the code I was 
            reading. Why is this loop here? What does that function call do?
          </div>

          <div>
            Thus, the motivation for codeGenius was born. By combining the annotation 
            functionality of Rapgenius with Rosettacode's concept of programming 
            chrestomathy, I hope to provide a valuable resource to aid the learning of 
            other new programmers.
          </div>

        </article>
      </article>
    );
  }
});

module.exports = IndexLeft;