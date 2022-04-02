import "./stockBtnRow.css";
import stockBtnRow from './stockBtnRow.html';

export default () => {
    const stockBtnRowContainer = document.createElement('div');
    stockBtnRowContainer.classList.add('buttonHandlers');

    //* Lo inserta porque le pasamos HTML puro y duro
    stockBtnRowContainer.innerHTML = stockBtnRow;

    return stockBtnRowContainer;
}