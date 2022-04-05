import { stockComponent } from "../../components/stock";
import { spinnerLoaderComponent } from "../../components/shared/index";
import { GatewayStock } from "../../gateways/stock/stock.gateway";
import DeLoreanImg from '../../../assets/img/delorean.jpeg';

export default () => {
    const stockView = document.createElement('div');
    stockView.setAttribute('id', 'stockContent');

    // Spinner Loader COMPONENT
    //* No acepta un innerHtml a pelo porque llamamos a una función que nos devuelve un obj NodeElement
    stockView.appendChild(spinnerLoaderComponent.spinnerLoader());
    const spinnerLoaderElement = stockView.querySelector('#containerSpinnerLoader');

    // Create Form COMPONENT
    stockView.appendChild(stockComponent.createForm());

    const submitButtonCreateForm = stockView.querySelector('#submitBtnCreateForm');
    submitButtonCreateForm.addEventListener('click', function (e) {
        e.preventDefault();
        postItemStock();
    });

    // Buttons Row COMPONENT
    stockView.appendChild(stockComponent.stockBtnRow());

    const refreshButton = stockView.querySelector('#refreshButton');
    const updateStockButton = stockView.querySelector('#updateBtn');
    const restoreButton = stockView.querySelector('#showBasket');
    refreshButton.addEventListener('click', getStock);
    updateStockButton.addEventListener('click', updateStock);
    restoreButton.addEventListener('click', getBasket);

    // Inventory COMPONENT
    stockView.appendChild(stockComponent.inventory());

    // Session Storage
    function addItemToLocalStorage(i) {
        if (window.confirm('Do you really want to add this item to your basket ?')) {
            let basketList = JSON.parse(sessionStorage.getItem('basketList'));
            if (basketList) {
                basketList = [...basketList, stock[i]];
            }
            else {
                basketList = [stock[i]];
            }
            sessionStorage.setItem('basketList', JSON.stringify(basketList));
        }
    }

    // Stock logic 
    let stock = undefined;

    async function getStock() {
        spinnerLoaderElement.style.display = 'flex';
        const response = await GatewayStock.inventory();
        if (response) {
            stock = response;
            loadStock();
        }
        else {
            alert("We have encountered an error while trying to load the inventory !");
        }
        spinnerLoaderElement.style.display = 'none';
    }

    async function postItemStock() {
        spinnerLoaderElement.style.display = 'flex';
        const valuesForm = document.forms.createItemStockForm.elements;

        const itemTemp = {
            model: valuesForm.model.value,
            brand: valuesForm.brand.value,
            category: valuesForm.category.value,
            year: parseInt(valuesForm.year.value),
            price: parseInt(valuesForm.price.value),
            ORIGINAL_PRICE: parseInt(valuesForm.price.value),
        }

        const response = await GatewayStock.postItemInventory(itemTemp);
        if (response) {
            const createForm = stockView.querySelector('#createItemStockForm');
            createForm.reset();
            getStock();
        }
        else {
            alert("We have encountered an error trying to create an item !");
        }
        spinnerLoaderElement.style.display = 'none';
    }

    async function deleteItemStock(indexItem) {
        spinnerLoaderElement.style.display = 'flex';
        const itemToDelete = stock[indexItem];
        const response = await GatewayStock.deleteItemInventory(itemToDelete.id);
        if (response) {
            const itemCard = document.getElementById(`item${indexItem}`);
            itemCard.remove();
        }
        else {
            alert("We have encountered an error trying to delete the selected item !");
        }
        spinnerLoaderElement.style.display = 'none';
    }

    async function updateStock() {
        spinnerLoaderElement.style.display = 'flex';
        const response = await GatewayStock.updateItemsInventory();
        if (response) {
            stock = response;
            loadStock();
        }
        else {
            alert("We have encountered an error !");
        }
        spinnerLoaderElement.style.display = 'none';
    }

    function getBasket() {
        window.location.href = 'http://localhost:8080/#/basket';
    }

    function loadStock() {
        const stockContent = stockView.querySelector('#stockInventoryContainer');

        stockContent.innerHTML = stock.map((item, i) => {
            return `
        <div id="item${i}" class="card">
            <h3 class="titleCard">${item.model}</h3>

            <div class="imgCardContainer">
            <img src=${DeLoreanImg} alt="DeLorean car img" class="imgCard">
            </div>

            <div class="descriptionCard">
                <p><strong>Brand:</strong>${item.brand}</p>
                <p><strong>Price:</strong>${item.price}</p>
                <p><strong>Year:</strong>${item.year}</p>
            </div>

            <div class="footerCard">
                <i class="btnDeleteItemInventory fa-solid fa-trash fa-2x"></i>
                <i class="btnAddItemInventory fa-solid fa-circle-plus fa-2x"></i>
                </div>
        </div>
                `;
        }).join(" ");

        //TODO: add modal info about vehicle when press icon
        // <i class="fa-solid fa-circle-info fa-2x"></i>

        const deleteButtons = stockContent.getElementsByClassName('btnDeleteItemInventory');
        Array.from(deleteButtons).forEach((button, i) => {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                deleteItemStock(i);
            });
        });

        const addButtons = stockContent.getElementsByClassName('btnAddItemInventory');
        Array.from(addButtons).forEach((button, i) => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                addItemToLocalStorage(i);
            })
        })
    }

    return stockView;
}