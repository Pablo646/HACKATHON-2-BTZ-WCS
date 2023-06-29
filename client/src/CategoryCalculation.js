import React from 'react'

const CategoryCalculation = ( memory, storage, power, state ) => {
//get form valors
    let memory_index;
    let storage_index;
    let power_index;
    let ponderation;
    let category;
//check memory
    if (memory === 1) {
        memory_index = 30
    } else if (memory === 2) {
        memory_index = 40
    } else {
        memory_index = 54
    }
//check storage
    if (storage === 16) {
        storage_index = 31
    } else if (storage === 32) {
        storage_index = 45
    } else {
        storage_index = 66
    }
//check antutu index
    if (power >= 100000) {
        power_index = 49
    } else if (power >= 50000) {
        power_index = 44
    } else {
        power_index = 40
    }
//check phone's state
    if (state === 'DEEE') {
        ponderation = -1
    } else if (state === 'Réparable') {
        ponderation = -0.5
    } else if (state === 'Bloqué') {
        ponderation = -0.1
    } else if (state === 'Reconditionnable') {
        ponderation = -0.05
    } else if (state === 'Reconditionné') {
        ponderation = 0
    } else if (state === 'Très bon état') {
        ponderation = 0.05
    } else {
        ponderation = 0.1
    }

    let overall_index = (memory_index + storage_index + power_index) * (1 + ponderation)
//calculate the overall index
    if (overall_index >= 375) {
        category = '5- Premium'
    } else if (overall_index >= 255) {
        category = '4 - A'
    } else if (overall_index >= 165) {
        category = '3 - B'
    } else if (overall_index >= 90) {
        category = '2 - C'
    } else {
        category = '1 - HC'
    }


    return (
        <div>
            <h2>La catégorie du téléphone testé est la suivante :</h2>
            <h3>{category}</h3>
        </div>
    )
}

export default CategoryCalculation