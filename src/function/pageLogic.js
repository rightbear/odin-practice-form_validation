import postCodeData from "../item/postalCodes.json" with { type: "json" };
import messageData from "../item/invaldMessage.json" with { type: "json" };

// Compare th password confirmation field with the original password field
export function comparePassword(fieldElement) {
  if (fieldElement.id === "user_confirm") {
    const passwordValue = document.querySelector(`#user_password`).value;
    if (fieldElement.value !== passwordValue) {
      return false;
    }
  }

  return true;
}

// If fields on the form cannot pass the validation, display error message
function showError(fieldElement, fieldMessage) {
  if (fieldElement.validity.valueMissing) {
    // If it's empty
    fieldMessage.textContent = messageData[`${fieldElement.name}`]["required"];
  } else if (fieldElement.validity.typeMismatch) {
    // If it's not a valid data type
    fieldMessage.textContent = messageData[`${fieldElement.name}`]["type"];
  } else if (fieldElement.validity.tooShort || fieldElement.validity.tooLong) {
    // If the value is too short or too long
    fieldMessage.textContent = messageData[`${fieldElement.name}`]["length"];
  } else if (fieldElement.validity.patternMismatch) {
    // If the value doesn't match the pattern
    fieldMessage.textContent = messageData[`${fieldElement.name}`]["pattern"];

    if (fieldElement.id === "user_postalCode") {
      const selectedCountry = document.querySelector("#user_country");
      const countryID = selectedCountry.selectedIndex;

      fieldMessage.textContent += `${postCodeData[countryID - 1]["Format"]}. ('N' mainly means number)`;
    }
  } else {
    fieldMessage.textContent = "Unknown reason to fail";
  }

  if (!comparePassword(fieldElement)) {
    // If the confirm password is wrong
    fieldMessage.textContent = messageData[`${fieldElement.name}`]["mismatch"];
  }

  // Removes the `Valid` class and add the `Invalid` class in the fieldElement
  fieldElement.classList.remove("validField");
  fieldElement.classList.add("invalidField");

  // Removes the `Valid` class and add the `Invalid` class in the fieldMessage
  fieldMessage.classList.remove("validMsg");
  fieldMessage.classList.add("invalidMsg");
}

// If fields on the form can pass the validation, display success message
function showCorrect(fieldElement, fieldMessage) {
  // If the value is checkedand passed
  fieldMessage.textContent = messageData[`${fieldElement.name}`]["correct"];

  // Removes `invalid` class and add the `valid` class in the fieldElement
  fieldElement.classList.remove("invalidField");
  fieldElement.classList.add("validField");

  // Removes the `invalid` class and add the `valid` class in the fieldMessage
  fieldMessage.classList.remove("invalidMsg");
  fieldMessage.classList.add("validMsg");
}

// Show messages under the fields based on the validation result
export function showMessage(fieldElement, fieldMessage) {
  if (fieldElement.id === "user_postalCode") {
    const selectedCountry = document.querySelector("#user_country");
    const countryID = selectedCountry.selectedIndex;

    fieldElement.setAttribute("pattern", postCodeData[countryID - 1]["Regex"]);
  }

  if (!fieldElement.validity.valid || !comparePassword(fieldElement)) {
    showError(fieldElement, fieldMessage);
  } else {
    showCorrect(fieldElement, fieldMessage);
  }
}

// Clear all values in the fields and validation result messages under the fields
export function resetField(fieldElement, fieldMessage) {
  if (
    fieldElement.id === "user_email" ||
    fieldElement.id === "user_password" ||
    fieldElement.id === "user_confirm"
  ) {
    fieldElement.value = "";
  } else if (fieldElement.id === "user_country") {
    fieldElement.options[0].selected = true;
  } else if (fieldElement.id === "user_postalCode") {
    fieldElement.value = "";
    fieldElement.disabled = true;
    fieldElement.placeholder =
      "The field is disbaled if selected country has no postal-code";
  }
  fieldElement.classList.remove("validField");
  fieldElement.classList.remove("invalidField");

  fieldMessage.textContent = "";
  fieldMessage.classList.remove("validMsg", "invalidMsg");
}
