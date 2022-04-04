const { SERVER_IP } = require("../../utils/constants");

const GatewayStock = (function singletonGatewayStock() {
    const miHeaders = new Headers();

    const _headerMaker = (method) => {
        return {
            method: `${method}`,
            mode: "cors",
            headers: miHeaders,
            cache: "default",
        }
    }

    const inventory = () => {
        return fetch(`http://${SERVER_IP}/vehicle`, _headerMaker('GET'))
            .then((response) => {
                if (response.ok) {
                    console.log("Response Status:", response.status);
                    return response.json().then((body) => {
                        return body.data
                    });
                }
                else {
                    console.log("Response Status:", response.status);
                    return false;
                }
            })
            .catch((error) => {
                console.log(error.message);
                return false;
            });
    }

    const deleteItemInventory = (idItem) => {
        return fetch(`http://${SERVER_IP}/vehicle/delete/id/${idItem}`, _headerMaker('DELETE'))
            .then((response) => {
                if (response.ok) {
                    console.log("Response Status:", response.status);
                    return true;
                }
                else {
                    console.log("Response Status:", response.status);
                    return false;
                }
            })
            .catch((error) => {
                console.log(error.message);
                return false;
            });
    }

    const updateItemsInventory = () => {
        return fetch(`http://${SERVER_IP}/vehicle/update/stock/discount`, _headerMaker('PUT'))
            .then((response) => {
                if (response.ok) {
                    console.log("Response Status:", response.status);
                    return response.json().then((body) => {
                        return body.data
                    });
                }
                else {
                    console.log("Response Status:", response.status);
                    return false;
                }
            })
            .catch((error) => {
                console.log(error.message);
                return false;
            });
    }

    const postItemInventory = (newItem) => {
        return fetch(`http://${SERVER_IP}/vehicle/create`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem)
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Response Status:", response.status);
                    return response.json().then((body) => {
                        return body.data
                    });
                }
                else {
                    console.log("Response Status:", response.status);
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
        updateItemsInventory,
        postItemInventory
    };
})();

exports.GatewayStock = GatewayStock;