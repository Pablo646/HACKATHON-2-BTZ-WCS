import React from 'react';
import PhoneForm from '../components/form/PhoneForm';
import FAQ from '../components/faq/FAQ';

import './home.css';

const Home = () => {
  return (
    <div className="homepage">
      <PhoneForm />
      <FAQ />
    </div>
  );
};

export default Home;
