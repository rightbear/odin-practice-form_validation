import "./styles.css";
import { loadInitialLayout } from './function/DOMControl'
import { createValidForm } from './item/formPage'

//import jsonData from './item/postal-codes.json' assert { type: 'json' };

loadInitialLayout();
createValidForm();