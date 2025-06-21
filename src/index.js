import "./styles.css";
import { loadInitialLayout, loadFormPage } from './function/DOMControl'
import { changePostalFieldEvent, addValidationFormEvent } from './function/eventHandler'

loadInitialLayout();
loadFormPage();
changePostalFieldEvent();
addValidationFormEvent();