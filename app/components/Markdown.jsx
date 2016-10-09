import React from 'react';
import Editor from 'Editor';

let Markdown = React.createClass({

  handleChange() {
      var text = this.refs.inputText.value;
      this.props.newText(text);
  },
  render() {
    return(
      <div className="container__input columns small-12 large-6">
        <textarea defaultValue={this.props.text} ref="inputText" onChange={this.handleChange}/>
      </div>
    )
  }
});

module.exports = Markdown;