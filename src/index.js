import "./styles.css";
import { loadInitialLayout, loadFormPage } from './function/DOMControl'
import { changePostalStateEvent, addValidationMsgEvent } from './function/eventHandler'

loadInitialLayout();
loadFormPage();
changePostalStateEvent();
addValidationMsgEvent();