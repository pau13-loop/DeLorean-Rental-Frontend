import Home from './home.controller';
import Stock from './stock.controller';
import NotFound from './404.controller';

const pages = {
    home: Home,
    post: Stock,
    notFound: NotFound
}

export { pages };