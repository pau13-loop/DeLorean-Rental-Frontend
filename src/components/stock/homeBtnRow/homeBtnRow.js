import "./homeBtnRow.css";
import HomeBtnRow from './homeBtnRow.html';

export default () => {
    const containerHomeBtnRow = document.createElement('div');
    containerHomeBtnRow.classList.add('buttonHandlers');
    containerHomeBtnRow.innerHTML = HomeBtnRow;

    return containerHomeBtnRow;
}