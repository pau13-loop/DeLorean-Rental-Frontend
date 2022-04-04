import './content-home.css';
import homeContent from './content-home.html';

export default () => {
    const homeContainer = document.createElement('div');
    homeContainer.style.margin = '35px';
    homeContainer.innerHTML = homeContent;

    return homeContainer;
}