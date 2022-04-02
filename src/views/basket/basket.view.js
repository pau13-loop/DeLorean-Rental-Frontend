import { basketComponent } from "../../components/basket";


export default () => {
    const basketView = document.createElement('div');
    basketView.append(basketComponent.basketHeader());
    basketView.append(basketComponent.basketListItems());

    return basketView;
}