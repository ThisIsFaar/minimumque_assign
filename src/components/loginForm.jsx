import React from "react";
import Form from "./common/form";
import { login } from "../services/authService";
import "../App.css";
import Joi from "joi-browser";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(32)
      .required()
      .label("Username"),
    password: Joi.string()
      .label("Password")
      .regex(
        new RegExp(
          "^(?=.*?[a-z])(?=.*?[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$"
        )
      ),
  };

  doSubmit = async () => {
    const { data } = this.state;
    await login(data.username, data.password);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "Retreive")}
          {this.renderInput("password", "Password", "Reset", "password")}
          <div className="FooterForm">
            {this.renderButton("Login")}
            <p>
              <a href="#register">
                <span className="register">New User?</span>
              </a>
              <a href="#signin">
                <span className="signin">Sign Up</span>
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
