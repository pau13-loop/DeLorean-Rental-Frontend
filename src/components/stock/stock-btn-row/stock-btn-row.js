import "./stock-btn-row.css";
import stockBtnRow from './stock-btn-row.html';

export default () => {
    const stockBtnRowContainer = document.createElement('div');
    stockBtnRowContainer.classList.add('buttonHandlers');
    stockBtnRowContainer.innerHTML = stockBtnRow;

    return stockBtnRowContainer;
}