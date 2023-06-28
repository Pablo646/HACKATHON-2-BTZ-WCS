import React, { useState } from 'react';
import axios from 'axios';

import './phoneform.css';

const PhoneForm = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    phoneYear: '',
    storage: '',
    memoryRam: '',
    isBlocked: '',
    screenSize: '',
    phoneStatus: '',
    antutuScore: '',
    estimationPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform actions with the form data, such as sending it to a server or updating the database
    try {
      // Send the form data to the server
      await axios.post('/api/phones', formData);
      // Reset the form fields after submission
      setFormData({
        brand: '',
        model: '',
        phoneYear: '',
        storage: '',
        memoryRam: '',
        isBlocked: '',
        screenSize: '',
        phoneStatus: '',
        antutuScore: '',
        estimationPrice: '',
      });

      // Show a success message or perform any other actions
      alert('Form submitted successfully!');
    } catch (error) {
      // Handle any errors that occur during form submission
      console.error('Error submitting form:', error);
      alert(
        'An error occurred while submitting the form. Please try again later.'
      );
    }
  };

  return (
    <form className="phone_form" onSubmit={handleSubmit}>
      <label htmlFor="brand">Brand:</label>
      <input
        type="text"
        id="brand"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        required
      />

      <label htmlFor="model">Model:</label>
      <input
        type="text"
        id="model"
        name="model"
        value={formData.model}
        onChange={handleChange}
        required
      />

      <label htmlFor="phoneYear">Phone Year:</label>
      <input
        type="number"
        id="phoneYear"
        name="phoneYear"
        value={formData.phoneYear}
        onChange={handleChange}
        required
      />

      <label htmlFor="storage">Storage:</label>
      <input
        type="number"
        id="storage"
        name="storage"
        value={formData.storage}
        onChange={handleChange}
        required
      />

      <label htmlFor="memoryRam">Memory RAM:</label>
      <input
        type="number"
        id="memoryRam"
        name="memoryRam"
        value={formData.memoryRam}
        onChange={handleChange}
        required
      />

      <label htmlFor="isBlocked">Is Blocked:</label>
      <select
        id="isBlocked"
        name="isBlocked"
        value={formData.isBlocked}
        onChange={handleChange}
        required>
        <option value="">Select an option</option>
        <option value="0">No</option>
        <option value="1">Yes</option>
      </select>

      <label htmlFor="screenSize">Screen Size:</label>
      <input
        type="number"
        id="screenSize"
        name="screenSize"
        step="0.1"
        value={formData.screenSize}
        onChange={handleChange}
        required
      />

      <label htmlFor="phoneStatus">Phone Status:</label>
      <input
        type="text"
        id="phoneStatus"
        name="phoneStatus"
        value={formData.phoneStatus}
        onChange={handleChange}
        required
      />

      <label htmlFor="phoneStatus">Antutu Score:</label>
      <input
        type="text"
        id="antutuScore"
        name="antutuScore"
        value={formData.phoneStatus}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default PhoneForm;
