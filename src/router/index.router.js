import { pages } from '../controllers/index';
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
            content.appendChild(pages.home());
            return content
        case '#/about':
            return console.log('About');
        default:
            return console.log('404');
    }
}

export { router };