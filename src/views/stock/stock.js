import { stockComponents } from "../../components/stock";

export default () => {
    console.log('stockComponents.homeBtnRow(): ', stockComponents.homeBtnRow());
    const stockView = document.createElement('div');
    stockView.classList.add('contentStock');

    stockView.appendChild(stockComponents.homeBtnRow());
    // stockView.innerHTML = stockComponents.homeBtnRow();

    return stockView;
}