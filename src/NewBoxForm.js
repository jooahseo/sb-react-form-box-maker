import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: "50",
    height: "50",
    backgroundColor: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">
        Width
      </label>
      <span>{`(${formData.width})`}</span>
      <input
        id="width"
        type="range"
        name="width"
        min="10"
        max="500"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">
        Height
      </label>
      <span>{`(${formData.height})`}</span>
      <input
        id="height"
        type="range"
        name="height"
        min="10"
        max="500"
        value={formData.height}
        onChange={handleChange}
      />

      
      <label htmlFor="backgroundColor">
        Background Color
      </label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
