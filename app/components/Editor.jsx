import React from 'react';

import Markdown from 'Markdown';
import Markup from 'Markup';

let Editor = React.createClass ({

getInitialState() {
    return {
      text: "Find the GitHub repo for this at: [https://github.com/Gmunker/ReactMarkdown](https://github.com/Gmunker/ReactMarkdown) \n\n# H1.Largest Text \n## H2.Second Largest Text \n###### H6.Smallest Text \n\n*** \n\n**This is bold text** \n\n*This is Italic* and _so is this_ \n\n**_You can also bold with italic_** \n\n~~If you need to strikethrough!~~ \n\n*** \nWe can also quote test: \n>Greg Munker \n\n Some basic Git commands are: \n ```\ngit status \ngit add \ngit commit\n``` \n\nYou can find more details on formatting at [GitHub Help Page - Basic writing and formatting syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/). Or you can look at the docs from the library [Remarkable](https://github.com/jonschlinkert/remarkable). Which is the library I used to render the markdown."
    }
  },

handleNewText(text) {
  this.setState({text: text})
},

  render() {
    return (
      <div className="mdEditor row">
        <div className="container__title small-12 columns small-centered">
          <h2>My Markdown App</h2>
          <p>Use this to create your markdown file for GitHub, then copy paste the "left" side into your README.md file.</p>
          <hr />
        </div>
        <div className="row">
          <Markdown text={this.state.text} newText={this.handleNewText}/>
          <Markup newText={this.state.text} />
        </div>
      </div>
    );
  }
});

module.exports = Editor;
