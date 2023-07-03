import React, { Component } from 'react'

class TextArea extends Component {
  render() {
    const { label, name, value, func } = this.props;
    let error = undefined;
    if (value.length > 25) error = 'Texto muito grande!'
    return (
      <label>
        { label }
        <textarea
          name={name}
          onChange={func}
          value={value}
        />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default TextArea;
