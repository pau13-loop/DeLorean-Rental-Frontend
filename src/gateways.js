
const Gateway = (function singletonGateway() {



    let serverip = "127.0.0.1:3000";

    var miHeaders = new Headers();

    var miInit = {
        method: "GET",
        mode: "cors",
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        headers: miHeaders,
        // cambiarlo a force- cache => carga del disco
        cache: "default",
    };

    const inventario = () => {
        // function inventario() {
        fetch(`http://${serverip}/vehicle`, miInit)
            .then((response) => {
                if (response.ok) {
                    console.log("Response Status:", response.status);
                    console.log("Reponse statuts text:", response.statusText);
                    response.json().then((body) => logItems(body.data));
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


    // intentar cachear con la cabecera mirando network de chrome

    function logItems(items) {
        const itemsList = document.querySelector("#itemList");
        itemList.innerHTML = items
            .map((item, i) => {
                return `
                    <li>
                        <p id="item${i}"> ${item.model}
                                        ${item.brand}</p>
                    </li>
                    `;
            })
            .join("");
    }
    return {
        inventario
    };
})();

exports.Gateway = Gateway;