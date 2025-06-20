import { createValidForm } from '../item/formPage'
import jsonData from '../item/postalCodes.json' with { type: 'json' };

export function loadInitialLayout() {
    const main = document.createElement("div");
    main.classList.add("main");
    document.body.appendChild(main);

    const content = document.createElement("div");
    content.classList.add("content");
    main.appendChild(content);
}

function addCountryOption() {
    //const countrySelect = document.querySelector('#user_country');

    /*
    jsonData.forEach(countryInfo) {
        const countryOption = document.createElement("option");
        countryOption.textContent = countryInfo['Country'];
    }
    */
}

export function loadFormPage(){
    createValidForm();
}