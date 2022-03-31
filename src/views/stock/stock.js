import { stockComponents } from "../../components/stock";

export default () => {
    const stockView = document.createElement('div');
    stockView.classList.add('contentStock');
    stockView.appendChild(stockComponents.homeBtnRow());

    return stockView;
}