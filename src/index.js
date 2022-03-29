// Button Handlers
const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', getStock);

const updateStockButton = document.getElementById('updateBtn');
updateStockButton.addEventListener('click', updateStock);

let stock = undefined;

// Handler Functions

async function getStock() {
    stock = await inventory();
    loadStock();
}

function loadStock() {
    const stockContent = document.getElementById('stockContent');

    stockContent.innerHTML = stock.map((item, i) => {
        return `
        <div id="item${i}" class="card">
            <h3 class="titleCard">${item.model}</h3>
            
            <div class="imgCardContainer">
                <img src="../assets/img/delorean.jpeg" alt="DeLorean car img" class="imgCard">
            </div>
        
            <div class="descriptionCard">
                <p><strong>Brand:</strong>${item.brand}</p>
                <p><strong>Price:</strong>${item.price}</p>
                <p><strong>Year:</strong>${item.year}</p>
            </div>
        
            <div class="footerCard">
            <button onclick='deleteItemStock(${JSON.stringify(item)}, ${i})'>Borrame !</button>
                <i id="btnDeleteItemStock" class="fa-solid fa-trash fa-2x"></i>
                <i class="fa-solid fa-circle-info fa-2x"></i>
            </div>
        </div>
        `;
    }).join(" ");
}

async function deleteItemStock(item, indexItem) {
    const response = await deleteItemInventory(item.id);
    if (response) {
        const itemCard = document.getElementById(`item${indexItem}`);
        itemCard.remove();
    }
}

async function updateStock() {
    stock = await updateItemsInventory();
    console.log('response: ', stock);
    loadStock();
}












// TODO: Gateway Module
const serverip = "127.0.0.1:3000";

const miHeaders = new Headers();

const miInit = {
    method: "GET",
    mode: "cors",
    headers: miHeaders,
    cache: "default",
};

const miInitDelete = {
    method: "DELETE",
    mode: "cors",
    headers: miHeaders,
    cache: "default",
};

const miInitUpdate = {
    method: "PUT",
    mode: "cors",
    headers: miHeaders,
    cache: "default",
};


const inventory = () => {
    return fetch(`http://${serverip}/vehicle`, miInit)
        .then((response) => {
            if (response.ok) {
                console.log("Response Status:", response.status);
                console.log("Reponse statuts text:", response.statusText);
                return response.json().then((body) => {
                    return body.data
                });
            }
            else {
                console.log("Response Status:", response.status);
                console.log("Reponse statuts text:", response.statusText);
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
}

const deleteItemInventory = (idItem) => {
    return fetch(`http://${serverip}/vehicle/delete/id/${idItem}`, miInitDelete)
        .then((response) => {
            if (response.ok) {
                console.log("Response Status:", response.status);
                console.log("Reponse statuts text:", response.statusText);
                return true;
            }
            else {
                console.log("Response Status:", response.status);
                console.log("Reponse statuts text:", response.statusText);
                return false;
            }
        })
        .catch((error) => {
            console.log(error.message);
            return false;
        });
}

const updateItemsInventory = () => {
    return fetch(`http://${serverip}/vehicle/update/stock/discount`, miInitUpdate)
        .then((response) => {
            if (response.ok) {
                console.log("Response Status:", response.status);
                console.log("Reponse statuts text:", response.statusText);
                return response.json().then((body) => {
                    return body.data
                });
            }
            else {
                console.log("Response Status:", response.status);
                console.log("Reponse statuts text:", response.statusText);
                return false;
            }
        })
        .catch((error) => {
            console.log(error.message);
            return false;
        });
}