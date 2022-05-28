import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import SelectInput from "./select";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},
    };
  }

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ target }) => {
    const { value, name } = target;
    const obj = { [name]: value };
    const newSchema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    if (!error) return null;
    const errors = {};
    errors[name] = error.details[0].message;
    return errors;
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data });
    const error = this.validateProperty(e);
    this.setState({ errors: error || {} });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    this.doSubmit();
  };
  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        onClick={this.handleSubmit}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  }
  renderInput(name, label, type = "text") {
    return (
      <Input
        name={name}
        value={this.state.data[name]}
        type={type}
        label={label}
        onChange={this.handleChange}
        error={this.state.errors[name]}
      />
    );
  }
  renderSelect(name,label, options) {
    
    return (
      <SelectInput
        label={label}
        value={this.state.data[name]}
        name={name}
        error={this.state.errors[name]}
        options={options}
        onChange={this.handleChange}
      />
    );
  }
}
export default Form;
