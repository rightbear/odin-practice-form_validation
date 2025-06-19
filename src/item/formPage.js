export function createValidForm() {
    const content = document.querySelector('.content');

    const validForm = document.createElement('form');
    validForm.id = 'validForm';
    validForm.noValidate = true;

    const emailField = document.createElement('div');
    emailField.id = 'emailField';
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'user_email');
    emailLabel.textContent = 'Email Address (Required)';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'user_email';
    emailInput.required = true;
    emailField.append(emailLabel, emailInput);

    const countryField = document.createElement('div');
    countryField.id = 'countryField';
    const countryLabel = document.createElement('label');
    countryLabel.setAttribute('for', 'user_country');
    countryLabel.textContent = 'Country (Required)';
    const countrySelect = document.createElement('select');
    countrySelect.name = 'country';
    countrySelect.id = 'user_country';
    countrySelect.required = true;
    countryField.append(countryLabel, countrySelect);

    const postalCodeField = document.createElement('div');
    postalCodeField.id = 'postalCodeField';
    const postalCodeLabel = document.createElement('label');
    postalCodeLabel.setAttribute('for', 'user_postalCode');
    postalCodeLabel.textContent = 'Postal Code (Required, unless the selected country have no code)';
    const postalCodeInput = document.createElement('input');
    postalCodeInput.type = 'text';
    postalCodeInput.name = 'postalCode';
    postalCodeInput.id = 'user_postalCode';
    postalCodeInput.required = true;
    postalCodeInput.disabled= true;
    postalCodeField.append(postalCodeLabel, postalCodeInput);

    const passwordField = document.createElement('div');
    passwordField.id = 'passwordField';
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'user_password');
    passwordLabel.textContent = 'Password (Required)';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.id = 'user_password';
    passwordInput.required = true;
    passwordField.append(passwordLabel, passwordInput);

    const confirmField = document.createElement('div');
    confirmField.id = 'confirmField';
    const confirmLabel = document.createElement('label');
    confirmLabel.setAttribute('for', 'user_confirm');
    confirmLabel.textContent = 'Confirm Password';
    const confirmInput = document.createElement('input');
    confirmInput.type = 'password';
    confirmInput.name = 'confirm';
    confirmInput.id = 'user_pconfirm';
    confirmInput.required = true;
    confirmField.append(confirmLabel, confirmInput);

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
    resetBtn.textContent = 'resetBtn';
    buttonSet.append(submitBtn, resetBtn);

    validForm.append(emailField, countryField, postalCodeField, passwordField, confirmField, buttonSet);

    content.appendChild(validForm);
}


/*

<form id="validForm" novalidate>
      <h1>Valid Me</h1>

        <div id="emailField">
            <label for="user_email">Email Address (Required)</label>
            <input type="email" name="email" id="user_email" required>
        </div>
        
        <div id="countryField">
            <label for="user_country">Country (Required)</label>
            <input type="text" name="country" id="user_country" required>
        </div>
        
        <div id="postalCodeField">
            <label for="user_postalCode">Postal Code (Required, unless the country doesn't have code)</label>
            <select name="postalCode" id="user_postalCode" required></select>
        </div>

        <div id="passwordField">
            <label for="user_password">Password (Required)</label>
            <input type="password" name="password" id="user_password" required>
        </div>

        <div id="confirmField">
            <label for="user_confirm">Confirm Password</label>
            <input type="password" name="confirm" id="user_confirm" required>
        </div>

        <div id="buttonSet">
            <button type="submit" id="submitBtn" value="submit" autofocus>Submit</button>
            <button id="resetBtn">Reset</button>
        </div>
</form>

*/