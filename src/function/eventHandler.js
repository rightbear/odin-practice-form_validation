import postCodeData from '../item/postalCodes.json' with { type: 'json' };
import messageData from '../item/invaldMessage.json' with { type: 'json' };

export function changePostalStateEvent (){
    const countrySelect = document.querySelector('#user_country');
    const postalCodeInput = document.querySelector('#user_postalCode');

    countrySelect.addEventListener('change', (event) => {
        // Access the selected option's value of country
        const selectedCountry = event.target;
        const countryID = selectedCountry.selectedIndex;

        if(postCodeData[countryID - 1]['Format'] === '- no codes -'){
            postalCodeInput.disabled = true;
            postalCodeInput.placeholder = 'The field is disbaled if not needed...';
        }
        else {
            postalCodeInput.disabled = false;
            postalCodeInput.placeholder = '';
        }
    })
}

function comparePassword (fieldElement) {
    if (fieldElement.id === "user_confirm") {
        const passwordValue = document.querySelector(`#user_password`).value;
        if(fieldElement.value !== passwordValue) {
            return false;
        }
    }

    return true;
}

function showError(fieldElement, fieldMessage) {
    if (fieldElement.validity.valueMissing) {
        // If it's empty
        fieldMessage.textContent = messageData[`${fieldElement.name}`]['required'];
    } else if (fieldElement.validity.typeMismatch) {
        // If it's not a valid data type
        fieldMessage.textContent = messageData[`${fieldElement.name}`]['type'];
    } else if (fieldElement.validity.tooShort || fieldElement.validity.tooLong) {
        // If the value is too short or too long
        fieldMessage.textContent = messageData[`${fieldElement.name}`]['length'];
    } else if (fieldElement.validity.patternMismatch) {
        // If the value doesn't match the pattern
        fieldMessage.textContent = messageData[`${fieldElement.name}`]['pattern'];

        if(fieldElement.id === 'user_postalCode') {
            const selectedCountry = document.querySelector('#user_country');
            const countryID = selectedCountry.selectedIndex;

            fieldMessage.textContent += `${postCodeData[countryID - 1]['Format']}. ('N' mainly means number)`
        }
    } else {
        fieldMessage.textContent = "Unknown reason to fail";
    }
    
    if(!comparePassword(fieldElement)) {
        // If the confirm password is wrong
        fieldMessage.textContent = messageData[`${fieldElement.name}`]['mismatch'];
    }

    // Removes the `valid` class
    if(fieldMessage.classList.contains('valid')){
        fieldMessage.classList.remove('valid'); 
    }

    // Add the `invalid` class
    if(!fieldMessage.classList.contains('invalid')){
        fieldMessage.classList.add('invalid');
    }
}

function showCorrect(fieldElement, fieldMessage) {
    // If the value is checkedand passed
    fieldMessage.textContent = messageData[`${fieldElement.name}`]['correct'];

    // Removes the `invalid` class
    if(fieldMessage.classList.contains('invalid')){
        fieldMessage.classList.remove('invalid'); 
    }

    // Add the `valid` class
    if(!fieldMessage.classList.contains('valid')){
        fieldMessage.classList.add('valid');
    }
}

function showMessage(fieldElement, fieldMessage) {

    if(fieldElement.id === 'user_postalCode') {
        const selectedCountry = document.querySelector('#user_country');
        const countryID = selectedCountry.selectedIndex;

        fieldElement.setAttribute('pattern', postCodeData[countryID - 1]['Regex']);
    }

    if(!fieldElement.validity.valid || !comparePassword(fieldElement)) {
        showError(fieldElement, fieldMessage);
    }
    else {
        showCorrect(fieldElement, fieldMessage);
    }
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
