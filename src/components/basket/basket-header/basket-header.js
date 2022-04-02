import './basket-header.html';
import basketHeaderContent from './basket-header.html';

export default () => {
    const basketHeaderContainer = document.createElement('div');
    basketHeaderContainer.classList.add('basketHeader');
    basketHeaderContainer.innerHTML = basketHeaderContent;

    return basketHeaderContainer;
}