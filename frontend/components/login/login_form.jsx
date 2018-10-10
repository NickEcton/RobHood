import React from 'react'
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="center">
        <div className="login-form-container">
          <div className="left-image"></div>
          <div className="login-form">
          <header className="welcome">
            <h2>Welcome to Rob's Hood</h2>
          </header>
          <div className="information">
          <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="vert-form">
          <div>
            <div className="the-fuck-kyle">
              <label>
              <div className="label">Email or Username</div>
                <div>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </div>
              </label>
            </div>
            <div className="the-fuck-kyle">
            <label>
              <div className="label">Password</div>
              <div>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </div>
            </label>
            </div>
          </div>
          </div>
          <footer>
            <div>
              <button className="login-submit" type="submit">Sign In</button>
            </div>
          </footer>
          </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm)
