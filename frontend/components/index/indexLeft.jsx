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
          <p>Syntax highlighting & source file downloading</p>
        </header>

        <article className="index-article">
          <div>
            At long last, syntax highlighting is available on codeGenius! No longer will 
            users be subject to soporific white text when trying to learn to code.
          </div>

          <div>
            As the feature is still being improved, highlighting will not automatically 
            take place on page load. For now, either press the "Highlight" button next to 
            the snippet language, or hit the backtick key ("`") when viewing a snippet to 
            enable syntax highlighting! It's like plugging in Christmas lights, but without 
            any of the tangled wires and familial resentment. What more could you ask for?
          </div>
          
          <div>
            Additionally, you can now download files directly off of codeGenius without 
            any copy pasting at all! Just scroll to the bottom of any snippet, and click on 
            the shiny new green 'Download' button.
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