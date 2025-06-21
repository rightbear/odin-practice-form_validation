import { createValidForm } from "../item/formPage";
import { createValidPage } from "../item/validPage";
import postCodeData from "../item/postalCodes.json" with { type: "json" };

// Load initial layout on the page
export function loadInitialLayout() {
  const main = document.createElement("div");
  main.classList.add("main");
  document.body.appendChild(main);

  const content = document.createElement("div");
  content.classList.add("content");
  main.appendChild(content);
}

// Load options of the selection for countries on the form
function addCountryOption() {
  const countrySelect = document.querySelector("#user_country");

  postCodeData.forEach((countryInfo) => {
    const countryOption = document.createElement("option");
    countryOption.textContent = countryInfo["Country"];
    countrySelect.appendChild(countryOption);
  });
}

// Clear all elements on the page
function clearContent() {
  const content = document.querySelector(".content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

// Load form for validation on the page
export function loadFormPage() {
  clearContent();
  createValidForm();
  addCountryOption();
}

// Load result of validation on the page
export function loadValidPage() {
  clearContent();
  createValidPage();
}
