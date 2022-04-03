import './basket-header.css';
import basketHeaderContent from './basket-header.html';

export default () => {
    const basketHeaderContainer = document.createElement('div');
    basketHeaderContainer.setAttribute('id', 'basketHeader');
    basketHeaderContainer.innerHTML = basketHeaderContent;

    return basketHeaderContainer;
}