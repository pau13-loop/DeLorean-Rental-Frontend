import './create-form.css';
import createFormContent from './create-form.html';

export default () => {
    const createFormContainer = document.createElement('div');
    createFormContainer.style.margin = '35px 0';
    createFormContainer.innerHTML = createFormContent;

    return createFormContainer;
}