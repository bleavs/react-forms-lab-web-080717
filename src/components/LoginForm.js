import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername = event => {
    this.setState(
      {
        username: event.target.value,
      }
    )
  }

  handlePassword = event => {
    this.setState(
      {
        password: event.target.value,
      }
    )
  }

  submitForm = event => {
    event.preventDefault()
  }


  render() {
    return (
      <form onSubmit={this.submitForm} >
        <div>
          <label>

            Username
            <input
              id="test-username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleUsername}
            />

          </label>
        </div>
        <div>
          <label>
            Password
            <input
            id="test-password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePassword} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
