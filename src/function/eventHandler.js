import { comparePassword, showMessage, resetField } from "./pageLogic";
import { loadFormPage, loadValidPage } from "./DOMControl";
import postCodeData from "../item/postalCodes.json" with { type: "json" };

export function changePostalFieldEvent() {
  const countrySelect = document.querySelector("#user_country");
  const postalCodeInput = document.querySelector("#user_postalCode");
  const postalCodeMsg = document.querySelector("#user_postalCode + span");

  // Function: When the specific country in selection list is clicked, the post-code field can be input if the country has postal-code
  countrySelect.addEventListener("change", (event) => {
    // Access the selected option's value of country
    const selectedCountry = event.target;
    const countryID = selectedCountry.selectedIndex;

    if (postCodeData[countryID - 1]["Format"] === "- no codes -") {
      postalCodeInput.disabled = true;
      postalCodeInput.value = "";
      postalCodeInput.placeholder =
        "The field is disbaled if selected country has no postal-code";
      postalCodeMsg.textContent = "";
    } else {
      postalCodeInput.disabled = false;
      postalCodeInput.placeholder = "";
    }
  });
}

export function addValidationFormEvent() {
  const allFields = document.querySelectorAll("input, select");
  const validForm = document.querySelector("#validForm");

  allFields.forEach((fieldElement) => {
    const fieldMessage = document.querySelector(`#${fieldElement.id} + span`);

    // Function: If fields on the form lose focus, the form will validate the content in fields
    fieldElement.addEventListener("blur", () => {
      showMessage(fieldElement, fieldMessage);
    });

    // Function: If fields on the form are input, the form will validate the content in fields
    fieldElement.addEventListener("input", () => {
      showMessage(fieldElement, fieldMessage);
    });
  });

  // Function: If the submit button on the form is clicked, the form will validate all fields to judge result
  validForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let isFormValid = true;

    allFields.forEach((fieldElement) => {
      if (fieldElement.disabled) {
        return;
      }

      const fieldMessage = document.querySelector(`#${fieldElement.id} + span`);

      showMessage(fieldElement, fieldMessage);

      if (!fieldElement.validity.valid || !comparePassword(fieldElement)) {
        isFormValid = false;
      }
    });

    // Function: If all fields pass the validation when form is submitted, the validation successful page will be loadeed
    if (isFormValid) {
      loadValidPage();
      addSuccessPageEvent();
    }
  });

  // Function: If the reset button on the form is clicked, the form will clear all fields and validation messages
  validForm.addEventListener("reset", (event) => {
    event.preventDefault();

    allFields.forEach((fieldElement) => {
      const fieldMessage = document.querySelector(`#${fieldElement.id} + span`);

      resetField(fieldElement, fieldMessage);
    });
  });
}

export function addSuccessPageEvent() {
  const restartBtn = document.querySelector("#restartBtn");

  // Function: If the restart button on the validation successful page is clicked, the form will be loadeed
  restartBtn.addEventListener("click", () => {
    loadFormPage();
    changePostalFieldEvent();
    addValidationFormEvent();
  });
}
