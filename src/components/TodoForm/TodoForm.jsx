import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    setValue(e.target.value); // take value from input box
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevent event reload

    if (!value.trim()) {
      // verify
      setValue(""); // clear input box
      return;
    }

    if (!onSubmit) return; //

    const formValues = {
      title: value,
    };

    onSubmit(formValues); // send form value to app.js
    setValue(""); // clear input box after sending
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange}></input>
    </form>
  );
}

export default TodoForm;
