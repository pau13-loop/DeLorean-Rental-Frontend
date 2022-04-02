import './basket-list-items.css';
import basketListItemsContent from './basket-list-items.html';

export default () => {
    const basketListItemsContainer = document.createElement('div');
    basketListItemsContainer.classList.add('basketList');
    basketListItemsContainer.innerHTML = basketListItemsContent;

    return basketListItemsContainer;
}