import './not-found.css';
import notFoundContent from './not-found.html';

export default () => {
    const notFoundContainer = document.createElement('div');
    notFoundContainer.classList.add('containerNotFound')
    notFoundContainer.innerHTML = notFoundContent;

    return notFoundContainer;
}