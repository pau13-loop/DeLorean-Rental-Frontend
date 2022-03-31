const fs = require("fs");

const FileServerReader = (function singletonFileServerReader() {

    const htmlReader = fs.readFile("./src/index.html", (err, data) => {
        if (err) {
            console.log('readHtml: ', err);
            return false;
        }
        return data;
    });

    const cssReader = async () => {
        const response = await fs.readFile('./src/index.css', (err, data) => {
            if (err) {
                console.log('cssReader: ', err);
                return false;
            }
            return data;
        });
        console.log('Response;: ', response);
        return response;
    }

    // const readScript = () => {
    //     return fs.readFileSync('./src/index.js', (err, data) => {
    //         if (err) {
    //             console.log('readScript: ', err);
    //             return false;
    //         }
    //         return data;
    //     });
    // }


    return {
        htmlReader,
        cssReader,
        // readScript
    }
})();

exports.FileServerReader = FileServerReader;