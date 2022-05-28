import React from "react";

const SelectInput = ({ label, name, options, error, onChange, value }) => {
  return (
    <div className="form-group">
      <label for={name}>{label}</label>
      <select
        className="form-control"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option value={option._id}>{option.name}</option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectInput;
