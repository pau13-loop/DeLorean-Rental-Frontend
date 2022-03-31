import "../views/home.css";
import homeView from '../views/home.html';

export default () => {
    const homeContainer = document.createElement('div');
    homeContainer.innerHTML = homeView;

    const btnClick = homeContainer.querySelector('#btn');
    btnClick.addEventListener('click', () => {
        alert('You clicked me bitch !');
    });

    return homeContainer;
};