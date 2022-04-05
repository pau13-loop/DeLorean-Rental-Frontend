import { basketComponent } from "../../components/basket";
import { spinnerLoaderComponent } from "../../components/shared";


export default () => {
    const basketView = document.createElement('div');
    basketView.style.width = '97%';
    basketView.style.margin = '15px auto';

    basketView.appendChild(spinnerLoaderComponent.spinnerLoader());
    basketView.append(basketComponent.basketHeader());
    basketView.append(basketComponent.basketListItems());

    const spinnerLoaderElement = basketView.querySelector('#containerSpinnerLoader');

    function deleteBasketItem(indexItem) {
        spinnerLoaderElement.style.display = 'flex';

        const itemsListBasket = JSON.parse(sessionStorage.getItem('basketList'));
        itemsListBasket.splice(indexItem, 1);
        sessionStorage.setItem('basketList', JSON.stringify(itemsListBasket));

        const basketItem = document.getElementById(`basketItem${indexItem}`);
        basketItem.remove();

        loadBasket();
        spinnerLoaderElement.style.display = 'none';
    }

    function loadBasket() {
        const itemsBasket = JSON.parse(sessionStorage.getItem('basketList'));
        const basketItemsList = basketView.querySelector('.basketList');

        if (itemsBasket.length > 0) {
            basketItemsList.innerHTML = itemsBasket.map((item, i) => {
                return `
                <li id="basketItem${i}" class="basketItemList">
                    <div class="itemTitle">
                        <i class="carIconBasket fa-solid fa-car"></i>
                        <p>${item.model}</p>
                    </div>
                    <div class="itemInfo">
                        <p class="brandItemBasket"><strong>Brand: </strong>${item.brand}</p>
                        <p><strong>Year: </strong>${item.year}</p>
                        <p><strong>Price: </strong>${item.price}</p>
                        <i class="trashIconBasket fa-solid fa-trash"></i>
                    </div>
                </li>
                `;
            }).join(" ");

            const deleteButtonsBasketItems = basketItemsList.getElementsByClassName('trashIconBasket');
            Array.from(deleteButtonsBasketItems).forEach((button, i) => {
                button.addEventListener('click', function (e) {
                    e.preventDefault();
                    deleteBasketItem(i);
                })
            })
        }
    }

    loadBasket();
    return basketView;
}