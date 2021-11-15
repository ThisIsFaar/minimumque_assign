import React from "react";
import Joi from "joi-browser";
import Input from "./input";
import "../../App.css";

class Form extends React.Component {
  state = {
    data: {},
    errrors: {},
  };
  validate() {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      if (item.type === "string.regex.base") {
        errors[item.path[0]] =
          "Password must conatin an Upper Case, Lower Case, number and special Character ex:Far@1234";
      } else {
        errors[item.path[0]] = item.message;
      }
    }
    return errors;
  }
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error, value: passValidate } = Joi.validate(obj, schema);

    if (error) {
      if (passValidate.password) {
        error.details[0].message =
          "Password must conatin an Upper Case, Lower Case, number and special Character ex:Far@1234";
        return error.details[0].message;
      } else {
        return error.details[0].message;
      }
    } else {
      return null;
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  renderButton(label) {
    return (
      <button disabled={this.validate()} type="submit" className="btn">
        {label}
      </button>
    );
  }
  renderInput(name, label, recoveryType, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        value={data[name]}
        label={label}
        name={name}
        type={type}
        onChange={this.handleChange}
        error={errors[name]}
        recoveryType={recoveryType}
      />
    );
  }
}

export default Form;
