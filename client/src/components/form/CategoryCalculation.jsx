import React from 'react';

const CategoryCalculation = ({storage, memoryRam, antutuScore, phoneStatus}) => {
  //get form valors
  let memory_index;
  let storage_index;
  let power_index;
  let ponderation;
  let category;
  //check memory
  if (memoryRam === '1GB') {
    memory_index = 30;
  } else if (memoryRam === '2GB') {
    memory_index = 40;
  } else if (memoryRam === '3GB') {
    memory_index = 50;
  } else if (memoryRam === '4GB') {
    memory_index = 60;
  } else if (memoryRam === '6GB') {
    memory_index = 70;
  } else if (memoryRam === '8GB') {
    memory_index = 80;
  } else if (memoryRam === '12GB') {
    memory_index = 90;
  } else if (memoryRam === '16GB') {
    memory_index = 100;
  } else {
    memory_index = 110;
  }
  //check storage
  if (storage === '8GB') {
    storage_index = 31;
  } else if (storage === '16GB') {
    storage_index = 45;
  }else if (storage === '32GB') {
    storage_index = 59;
  }else if (storage === '64GB') {
    storage_index = 73;
  }else if (storage === '128GB') {
    storage_index = 87;
  } else {
    storage_index = 100;
  }
  //check antutu index
  if (antutuScore === '150000 - 200000') {
    power_index = 54;
  } else if (antutuScore === '100000 - 150000') {
    power_index = 49;
  } else if (antutuScore === '50000 - 100000') {
    power_index = 44;
  } else {
    power_index = 40;
  }
  //check phone's state
  if (phoneStatus === 'DEEE') {
    ponderation = -1;
  } else if (phoneStatus === 'Réparable') {
    ponderation = -0.5;
  } else if (phoneStatus === 'Bloqué') {
    ponderation = -0.1;
  } else if (phoneStatus === 'Reconditionnable') {
    ponderation = -0.05;
  } else if (phoneStatus === 'Reconditionné') {
    ponderation = 0;
  } else if (phoneStatus === 'Très bon état') {
    ponderation = 0.05;
  } else {
    ponderation = 0.2;
  }

  let overall_index =
    (memory_index + storage_index + power_index) * (1 + ponderation);
  //calculate the overall index
  if (overall_index >= 375) {
    category = '5- Premium';
  } else if (overall_index >= 255 && overall_index < 375) {
    category = '4 - A';
  } else if (overall_index >= 165 && overall_index < 255) {
    category = '3 - B';
  } else if (overall_index >= 90 && overall_index < 165) {
    category = '2 - C';
  } else {
    category = '1 - HC';
  }
  console.log(overall_index);
  console.log(storage, memoryRam, antutuScore, phoneStatus);

  return (
    <div>
      <h2>La catégorie du téléphone testé est la suivante :</h2>
      <h3>{category}</h3>
    </div>
  );
};

export default CategoryCalculation;
