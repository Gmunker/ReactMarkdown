import React from 'react';

var Nav = React.createClass({
  render() {
    return(
      <div className="Navbar top-bar">
        <h1 className="fcc-title"><a href="http://www.freecodecamp.com" target="_blank">FreeCodeCamp<img className="fcc-flame-icon" src="https://fvcproductions.files.wordpress.com/2016/06/freecodecamp.png?w=750" /></a>GitHub Markdown</h1>
            <div className="credits">
              <h2>Designed and Created by: </h2>
              <h2>Greg Munker</h2>
              <h2><a className="github-link" href="https://github.com/Gmunker/ReactMarkdown">(GitHub Repo)</a></h2>
              <div className="social-buttons expanded button-group">
                  <a className="button secondary" href="http://www.facebook.com/gmunker" target="_blank">Facebook</a>
                  <a className="button secondary" href="https://plus.google.com/u/0/+GregMunker" target="_blank">Google+</a>
                  <a className="button secondary" href="https://github.com/Gmunker" target="_blank">Github</a>
                  <a className="button secondary" href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button" target="_blank">LinkedIn</a>
                  <a className="button secondary" href="https://twitter.com/Gmunker" target="_blank">Twitter</a>
              </div>
            </div>
      </div>
    )
  }
  });

module.exports = Nav;
