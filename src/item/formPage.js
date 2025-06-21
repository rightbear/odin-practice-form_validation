export function createValidForm() {
    const content = document.querySelector('.content');

    const validForm = document.createElement('form');
    validForm.id = 'validForm';
    validForm.noValidate = true;

    const formHeader = document.createElement('h1');
    formHeader.textContent = 'Validate Me';

    const emailField = document.createElement('div');
    emailField.id = 'emailField';
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'user_email');
    emailLabel.textContent = 'Email Address (Required)';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'user_email';
    emailInput.placeholder = 'Input your email address, like "example@email.com"';
    emailInput.autocomplete = 'on';
    emailInput.required = true;
    const emailMessage = document.createElement('span');
    emailMessage.classList.add('validationMsg');
    emailField.append(emailLabel, emailInput, emailMessage);

    const countryField = document.createElement('div');
    countryField.id = 'countryField';
    const countryLabel = document.createElement('label');
    countryLabel.setAttribute('for', 'user_country');
    countryLabel.textContent = 'Country (Required)';
    const countrySelect = document.createElement('select');
    countrySelect.name = 'country';
    countrySelect.id = 'user_country';
    countrySelect.autocomplete = 'on';
    countrySelect.required = true;
    const countrySelectOptText = document.createElement("option");
    countrySelectOptText.value = "";
    countrySelectOptText.disabled = true;
    countrySelectOptText.selected = true;
    countrySelectOptText.textContent = "Click to select your country";
    countrySelect.appendChild(countrySelectOptText);
    const countryMessage = document.createElement('span');
    countryMessage.classList.add('validationMsg');
    countryField.append(countryLabel, countrySelect, countryMessage);

    const postalCodeField = document.createElement('div');
    postalCodeField.id = 'postalCodeField';
    const postalCodeLabel = document.createElement('label');
    postalCodeLabel.setAttribute('for', 'user_postalCode');
    postalCodeLabel.textContent = 'Postal Code (Required)';
    const postalCodeInput = document.createElement('input');
    postalCodeInput.type = 'text';
    postalCodeInput.name = 'postalCode';
    postalCodeInput.id = 'user_postalCode';
    postalCodeInput.autocomplete = 'on';
    postalCodeInput.required = true;
    postalCodeInput.disabled= true;
    postalCodeInput.placeholder = "The field is disbaled if selected country has no postal-code"
    const postalCodeMessage = document.createElement('span');
    postalCodeMessage.classList.add('validationMsg');
    postalCodeField.append(postalCodeLabel, postalCodeInput, postalCodeMessage);

    const passwordField = document.createElement('div');
    passwordField.id = 'passwordField';
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'user_password');
    passwordLabel.textContent = 'Password (Required)';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'text';
    passwordInput.name = 'password';  
    passwordInput.id = 'user_password';
    passwordInput.minLength = 8;
    passwordInput.maxLength = 20;
    passwordInput.setAttribute('pattern', '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$');
    passwordInput.autocomplete = 'on';
    passwordInput.required = true;
    passwordInput.placeholder = 'Enter your password';
    const passwordMessage = document.createElement('span');
    passwordMessage.classList.add('validationMsg');
    passwordField.append(passwordLabel, passwordInput, passwordMessage);

    const confirmField = document.createElement('div');
    confirmField.id = 'confirmField';
    const confirmLabel = document.createElement('label');
    confirmLabel.setAttribute('for', 'user_confirm');
    confirmLabel.textContent = 'Confirm Password';
    const confirmInput = document.createElement('input');
    confirmInput.type = 'text';
    confirmInput.name = 'confirm';
    confirmInput.id = 'user_confirm';
    confirmInput.autocomplete = 'on';
    confirmInput.required = true;
    confirmInput.placeholder = 'Reenter the same password as above';
    const confirmMessage = document.createElement('span');
    confirmMessage.classList.add('validationMsg');
    confirmField.append(confirmLabel, confirmInput, confirmMessage);

    const buttonSet = document.createElement('div');
    buttonSet.id = 'buttonSet';
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.id = 'submitBtn';
    submitBtn.value = 'submit';
    submitBtn.autofocus = true;
    submitBtn.textContent = 'Submit';
    const resetBtn = document.createElement('button');
    resetBtn.id = 'resetBtn';
    resetBtn.textContent = 'Reset';
    buttonSet.append(submitBtn, resetBtn);

    validForm.append(formHeader, emailField, countryField, postalCodeField, passwordField, confirmField, buttonSet);

    content.appendChild(validForm);
}