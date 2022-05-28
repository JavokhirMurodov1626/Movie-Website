import React from "react";

function SearchBox({ value, onChange }) {
  return (
    <div className="col-5">
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search..."
        name="query"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
