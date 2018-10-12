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

    componentDidMount() {
      this.props.clearErrors();
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

    render () {
      return (
        <div className="submit-page">
        <div className="signup-header">
          <div className="RobhoodLogo"><a href="#/"><img className="robin" src={window.images.logo}/></a></div>
          <div className="signup-progress">
            <div className="signup-status">Account</div>
            <div className="signup-status">Basic Info</div>
            <div className="signup-status">Identity</div>
            <div className="signup-status">Funding</div>
            <div className="signup-status">Submit</div>
          </div>
        </div>
        <div className="render-errors">
                  </div>
          <div className="signup-container">

          <div className="table">
                          {this.renderErrors()}
          <h1> Make Your Money Move</h1>
          <h2 className="signup-header">Robinhood lets you invest in companies you love, commission-free.</h2>
            <form className="this-form" onSubmit={this.handleSubmit}>
              <label>
                <input type="text"
                value={this.state.username}
                onChange={this.update('username')}                placeholder="Username"
                required
                />
              </label>
              <label>
                <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                required
                />
              </label>
              <label>
                <input type="password"
                value={this.state.password}
                onChange={this.update('password')}                placeholder="Password"
                required
                />
              </label>
              <button className="SignInBtn" type="submit">Sign Up!</button>
              </form>
              <div>
              <p className="application-finish-link">Already started? <a href="/#/login">Log in to complete your application</a> </p>
              </div>
            </div>
            <div className="gif-container"><img src="https://media.giphy.com/media/gTURHJs4e2Ies/giphy.gif"/></div>
            </div>
          </div>
      )
    }


}

export default withRouter(SignupForm)
