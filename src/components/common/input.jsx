import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Input = ({ label, name, error, recoveryType, value, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <label className="recover" ><Link to={`/empty-page/${value}`} >{recoveryType}</Link></label>
      <input {...rest} id={name} name={name} maxLength={32} className="form-control" />
      {error && (
        <div className="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
