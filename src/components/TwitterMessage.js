import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };
  }

  update = event => {
    this.setState(
      {
        value: event.target.value
      }
    );
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        value={this.state.value}
        onChange={this.update} />
        <p>Max: {this.props.maxChars}</p>
        <p>Left: {this.props.maxChars - this.state.value.length}</p>

      </div>
    );
  }

}

export default TwitterMessage;
