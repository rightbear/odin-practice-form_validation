import "./styles.css";
import { loadInitialLayout, loadFormPage } from "./function/DOMControl";
import {
  changePostalFieldEvent,
  addValidationFormEvent,
} from "./function/eventHandler";

// Create the initial form page and add eventListners on the page
loadInitialLayout();
loadFormPage();
changePostalFieldEvent();
addValidationFormEvent();
