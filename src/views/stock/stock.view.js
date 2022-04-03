import { stockComponent } from "../../components/stock";
import { GatewayStock } from "../../gateways/stock/stock.gateway";
import DeLoreanImg from '../../../assets/img/delorean.jpeg';

export default () => {
    const stockView = document.createElement('div');
    stockView.setAttribute('id', 'stockContent');

    //* No acepta un innerHtml a pelo porque llamamos a una función que nos devuelve un obj HTML
    stockView.appendChild(stockComponent.createForm());
    stockView.appendChild(stockComponent.stockBtnRow());
    stockView.appendChild(stockComponent.inventory());

    const refreshButton = stockView.querySelector('#refreshButton');
    const updateStockButton = stockView.querySelector('#updateBtn');
    refreshButton.addEventListener('click', getStock);
    updateStockButton.addEventListener('click', updateStock);

    const submitButtonCreateForm = stockView.querySelector('#submitBtnCreateForm');
    submitButtonCreateForm.addEventListener('click', function (e) {
        e.preventDefault();
        postItemStock();
    });

    // Handler Functions
    let stock = undefined;

    const serverip = "127.0.0.1:3000";

    async function postItemStock() {
        const valuesForm = document.forms.createItemStockForm.elements;

        const itemTemp = {
            model: valuesForm.model.value,
            brand: valuesForm.brand.value,
            category: valuesForm.category.value,
            year: parseInt(valuesForm.year.value),
            price: parseInt(valuesForm.price.value),
            ORIGINAL_PRICE: parseInt(valuesForm.price.value),
        }

        await GatewayStock.postItemInventory(itemTemp);
        getStock();
    }

    async function getStock() {
        stock = await GatewayStock.inventory();
        loadStock();
    }

    async function deleteItemStock(indexItem) {
        const itemToDelete = stock[indexItem];
        const response = await GatewayStock.deleteItemInventory(itemToDelete.id);
        if (response) {
            const itemCard = document.getElementById(`item${indexItem}`);
            itemCard.remove();
        }
    }

    async function updateStock() {
        stock = await GatewayStock.updateItemsInventory();
        loadStock();
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
                <i id="btnDeleteItemStock" class="btnDeleteItemInventory fa-solid fa-trash fa-2x"></i>
                <i class="fa-solid fa-circle-info fa-2x"></i>
            </div>
        </div>
        `;
        }).join(" ");

        const deleteButtons = stockContent.getElementsByClassName('btnDeleteItemInventory');
        Array.from(deleteButtons).forEach((button, i) => {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                deleteItemStock(i);
            });
        });
    }

    return stockView;
}