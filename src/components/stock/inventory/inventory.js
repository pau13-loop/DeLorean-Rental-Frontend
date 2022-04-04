import './inventory.css'

export default () => {
    const inventoryContainer = document.createElement('div');
    inventoryContainer.setAttribute('id', 'stockInventoryContainer');

    return inventoryContainer;
}