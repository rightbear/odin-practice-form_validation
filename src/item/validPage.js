import highFive from "../image/high-five.svg"

export function createValidPage() {
    const content = document.querySelector('.content');

    const validPage = document.createElement('div');
    validPage.id = 'validPage';
    
    const successMsg = document.createElement('h1');
    successMsg.id = 'successMsg';
    successMsg.textContent = 'You sccessfully validate the form. Good job!'

    const successImg = document.createElement('img');
    successImg.id = 'successImg';
    successImg.src = highFive;
    successImg.alt = 'high-five';
    
    const formBtn  = document.createElement('button');
    formBtn.id = 'formBtn';
    formBtn.textContent = 'Try the validation again';

    validPage.append(successMsg, successImg, formBtn);
    content.appendChild(validPage);
}