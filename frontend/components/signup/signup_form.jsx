import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        email: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

    handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state)
      this.props.processform(user)
    }

    render () {
      return (
        <div className="submit-page">
          <div className="signup-progress">
          <h2>GIVE US YOUR CASH</h2>
          </div>
          <div>
          <form className="this-form" onSubmit={this.handleSubmit}>
            <label>USERNAME:
              <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              />
            </label>
            <label>EMAIL:
              <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              />
            </label>
            <label>PASSWORD:
              <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              />
            </label>
            <button type="submit">Sign Up!</button>
            </form>
            </div>
          </div>
      )
    }


}

export default withRouter(SignupForm)
