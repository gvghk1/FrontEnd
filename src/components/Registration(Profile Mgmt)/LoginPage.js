import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
class Login extends React.Component {
  handleSubmit = () => {
    // method to handle submission of Login and Password
  };
  render() {
    return (
      <div className="base-container">
        <h1>Login Page</h1>
        <p>Enter your login credentials in the fields below</p>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Login ID</label>
              <input
                type="text"
                placeholder="Login ID"
                name="loginID"
                required={true}
              />{" "}
              <hr />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required={true}
              />
            </div>
            <br /> <br />
            <div className="submit_btn" style={{ textAlign: "center" }}>
              <input type="submit" value="Submit" name="login"></input>
            </div>
            <br />
          </form>
        </div>
        <Link to="/profile">
          <span href="#create" className="account-link">
            Not a returning user? Click here to create an account.
          </span>
        </Link>
        <br />
      </div>
    );
  }
}
export default Login;
