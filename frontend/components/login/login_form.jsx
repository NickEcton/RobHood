import React from 'react'
import { withRouter, Redirect } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.demoSubmit = this.demoSubmit.bind(this)
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

  demoSubmit() {
    this.setState({
      username: 'ronil',
      password: 'ronilronil'
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processform(user)

  }

  renderErrors() {
    console.log(this.props.errors)
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
          {this.renderErrors()}
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
            <div className="buttons">
              <button className="login-submit" type="submit">Sign In</button>
              <button className="login-submit" onClick={this.demoSubmit}>Demo</button>
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
