import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { name, type, value, func, label } = this.props;
    return (
      <label>
        {label}
        <input
          name={name}
          type={type}
          value={value}
          onChange={func}
        />
      </label>
    )
  }
}

export default Input