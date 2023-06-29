import React, { useState } from 'react';
import axios from 'axios';
import CategoryCalculation from './CategoryCalculation';

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
      await axios.post('/phones', formData);
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

  const brandModels = {
    Apple: ['iPhone 12', 'iPhone 11', 'iPhone SE', 'iPhone XR'],
    Samsung: ['Galaxy S21', 'Galaxy S20', 'Galaxy Note 20', 'Galaxy A52'],
    'Google Pixel': ['Pixel 5', 'Pixel 4a', 'Pixel 3a', 'Pixel 2'],
    Oppo: ['Oppo Reno 5', 'Oppo Find X3', 'Oppo A74', 'OF19'],
    Xiaomi: ['Mi 11', 'Redmi Note 10 Pro', 'Poco X3 Pro', 'Mi 10T'],
    Nokia: ['Nokia 8.3', 'Nokia 5.4', 'Nokia 3.4', 'Nokia 2.4'],
  };

  // Get the available phone models based on the selected brand
  const availableModels = brandModels[formData.brand] || [];

  // Extract the required values from the formData state
  const { storage, memoryRam, antutuScore, phoneStatus } = formData;

  // Check if all form fields are filled up
  const isFormComplete =
    formData.brand &&
    formData.model &&
    formData.phoneYear &&
    formData.storage &&
    formData.memoryRam &&
    formData.isBlocked &&
    formData.screenSize &&
    formData.phoneStatus &&
    formData.antutuScore;

  return (
    <form className="phone_form" onSubmit={handleSubmit}>
      <label htmlFor="brand">Brand:</label>
      <select
        id="brand"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        required>
        <option value="">Select a brand</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Google Pixel">Google Pixel</option>
        <option value="Oppo">Oppo</option>
        <option value="Xiaomi">Xiaomi</option>
        <option value="Nokia">Nokia</option>
      </select>

      <label htmlFor="model">Model:</label>
      <select
        id="model"
        name="model"
        value={formData.model}
        onChange={handleChange}
        required>
        <option value="">Select a model</option>
        {availableModels.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>

      <label htmlFor="phoneYear">Phone Year:</label>
      <select
        id="phoneYear"
        name="phoneYear"
        value={formData.phoneYear}
        onChange={handleChange}
        required>
        <option value="">Select a year</option>
        {Array.from({ length: new Date().getFullYear() - 2009 }, (_, index) => (
          <option key={index} value={2010 + index}>
            {2010 + index}
          </option>
        ))}
      </select>

      <label htmlFor="storage">Storage:</label>
      <select
        classname="form_input"
        type="number"
        id="storage"
        name="storage"
        value={formData.storage}
        onChange={handleChange}
        required>
        <option value="">Select storage size</option>
        <option value="8">8GB</option>
        <option value="16">16GB</option>
        <option value="32">32GB</option>
        <option value="64">64GB</option>
        <option value="128">128GB</option>
        <option value="256">256GB</option>
      </select>

      <label htmlFor="memoryRam">Memory RAM:</label>
      <select
        id="memoryRam"
        name="memoryRam"
        value={formData.memoryRam}
        onChange={handleChange}
        required>
        <option value="">Select RAM size</option>
        <option value="2">2GB</option>
        <option value="3">3GB</option>
        <option value="4">4GB</option>
        <option value="6">6GB</option>
        <option value="8">8GB</option>
        <option value="12">12GB</option>
        <option value="16">16GB</option>
      </select>

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
      <select
        id="screenSize"
        name="screenSize"
        value={formData.screenSize}
        onChange={handleChange}
        required>
        <option value="">Select screen size</option>
        <option value="4.0">4.0 "</option>
        <option value="4.7">4.7 "</option>
        <option value="5.0">5.0 "</option>
        <option value="5.5">5.5 "</option>
        <option value="6.0">6.0 "</option>
        <option value="6.5">6.5 "</option>
      </select>

      <label htmlFor="phoneStatus">Phone Status:</label>
      <select
        id="phoneStatus"
        name="phoneStatus"
        value={formData.phoneStatus}
        onChange={handleChange}
        required>
        <option value="">Select phone status</option>
        <option value="DEEE">DEEE</option>
        <option value="REPARABLE">REPARABLE</option>
        <option value="BLOQUE">BLOQUE</option>
        <option value="RECONDITIONABLE">RECONDITIONABLE</option>
        <option value="RECONDITIONNE">RECONDITIONNE</option>
        <option value="TRES BON ETAT">TRES BON ETAT</option>
        <option value="NEUF">NEUF</option>
      </select>

      <label htmlFor="antutuScore">Antutu Score:</label>
      <select
        id="antutuScore"
        name="antutuScore"
        value={formData.antutuScore}
        onChange={handleChange}
        required>
        <option value="">Select an Antutu Score range</option>
        <option value="0-50000">0 - 50,000</option>
        <option value="50000-100000">50,000 - 100,000</option>
        <option value="100000-150000">100,000 - 150,000</option>
        <option value="150000-200000">150,000 - 200,000</option>
      </select>

      {isFormComplete && (
        <div>
          <CategoryCalculation
            storage={storage}
            memoryRam={memoryRam}
            antutuScore={antutuScore}
            phoneStatus={phoneStatus}
          />
        </div>
      )}

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default PhoneForm;
