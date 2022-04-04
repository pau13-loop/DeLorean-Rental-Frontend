
const Gateway = (function singletonGateway() {
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

    return {
        inventory,
        deleteItemInventory,
        updateItemsInventory
    };
})();

exports.Gateway = Gateway;