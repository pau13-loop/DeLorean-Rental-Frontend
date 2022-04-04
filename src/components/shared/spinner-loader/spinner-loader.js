import './spinner-loader.css';
import spinnerLoaderContent from './spinner-loader.html';

export default () => {
    const spinnerLoaderContainer = document.createElement('div');
    spinnerLoaderContainer.setAttribute('id', 'containerSpinnerLoader');
    spinnerLoaderContainer.innerHTML = spinnerLoaderContent;

    return spinnerLoaderContainer;
}