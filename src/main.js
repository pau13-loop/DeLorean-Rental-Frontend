import './index.css';
import { router } from './router/index.router'

localStorage.setItem('basketList', JSON.stringify([]));

router(window.location.hash);
window.addEventListener('hashchange', () => {
    router(window.location.hash);
});
