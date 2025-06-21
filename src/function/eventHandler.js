import { comparePassword, showError, showCorrect, showMessage } from './pageLogic';
import postCodeData from '../item/postalCodes.json' with { type: 'json' };

export function changePostalStateEvent (){
    const countrySelect = document.querySelector('#user_country');
    const postalCodeInput = document.querySelector('#user_postalCode');
    const postalCodeMsg = document.querySelector('#user_postalCode + span');

    countrySelect.addEventListener('change', (event) => {
        // Access the selected option's value of country
        const selectedCountry = event.target;
        const countryID = selectedCountry.selectedIndex;

        if(postCodeData[countryID - 1]['Format'] === '- no codes -'){
            postalCodeInput.disabled = true;
            postalCodeInput.value = '';
            postalCodeInput.placeholder = "The field is disbaled if selected country has no postal-code";
            postalCodeMsg.textContent = '';
        }
        else {
            postalCodeInput.disabled = false;
            postalCodeInput.placeholder = '';
        }
    })
}

export function addValidationMsgEvent(){

    const allFields = document.querySelectorAll('input, select');
    const validForm = document.querySelector('#validForm');

    allFields.forEach((fieldElement) => {

        const fieldMessage = document.querySelector(`#${fieldElement.id} + span`);

        fieldElement.addEventListener('blur', () => {
            showMessage(fieldElement, fieldMessage);
        })

        fieldElement.addEventListener('input', () => {
            showMessage(fieldElement, fieldMessage);
        })
    });

    
    validForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        let isFormValid = true;
        
        allFields.forEach((fieldElement) => {

            if(fieldElement.disabled) {
                return;
            }

            const fieldMessage = document.querySelector(`#${fieldElement.id} + span`);

            showMessage(fieldElement, fieldMessage);

            if(!fieldElement.validity.valid || !comparePassword(fieldElement)) {
                isFormValid = false;
            }
        })

        if(isFormValid) {
            console.log('Form is valid!');
        }
        else {
            console.log('Form is invalid');
        }
    });
}
