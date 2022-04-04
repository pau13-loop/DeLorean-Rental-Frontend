import { notFoundComponent } from '../../components/404/index';

export default () => {
    const notFoundView = document.createElement('div');
    notFoundView.appendChild(notFoundComponent.contentNotFound());

    return notFoundView;
}