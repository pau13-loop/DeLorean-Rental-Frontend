import { views } from '../views/index';

let content = document.getElementById('content');

const router = (routeName) => {
    content.innerHTML = "";
    switch (routeName) {
        case '#/': {
            content.appendChild(views.stockView());
            return content;
        }
        case '#/stock':
            // content.appendChild(views.stockView());
            // return content
            break;
        case '#/about':
            return console.log('About');
        default:
            content.appendChild(views.notFoundView());
    }
}

export { router };