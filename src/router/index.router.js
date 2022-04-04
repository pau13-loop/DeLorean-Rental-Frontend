import { views } from '../views/index';

let content = document.getElementById('content');

const router = (routeName) => {
    content.innerHTML = "";
    switch (routeName) {
        case '#/':
            content.appendChild(views.homeView());
            return content;
        case '#/stock':
            content.appendChild(views.stockView());
            return content;
        case '#/basket':
            content.appendChild(views.basketView());
            return content;
        default:
            content.appendChild(views.notFoundView());
            return content;
    }
}

export { router };