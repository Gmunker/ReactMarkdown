import React from 'react';
import Remarkable from 'remarkable';

let Markup = React.createClass({

  getRawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.props.newText) };
  },

  render() {
    return(
      <div className="container__output columns small-12 large-6">
        <div dangerouslySetInnerHTML={this.getRawMarkup()}></div>
      </div>
    )
  }
});

module.exports = Markup;