import "./stock-btn-row.css";
import stockBtnRow from './stock-btn-row.html';

export default () => {
    const stockBtnRowContainer = document.createElement('div');
    stockBtnRowContainer.classList.add('buttonHandlers');

    //* Lo inserta porque le pasamos HTML puro y duro
    stockBtnRowContainer.innerHTML = stockBtnRow;

    return stockBtnRowContainer;
}