import { homeComponent } from "../../components/home";


export default () => {
    const homeView = document.createElement('div');
    homeView.setAttribute('id', 'homeContent');

    homeView.appendChild(homeComponent.homeComponent());

    return homeView;
}