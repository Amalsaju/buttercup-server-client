import https from "https";
const axios = require("axios");
export async function getDirectoryContents(options) {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    return new Promise((resolve, reject) => {
        axios
            .get(options.databaseURL + "api/UserDatas/" + options.databaseUUID, { httpsAgent })
            .then(response => {
            if (response.status == 200 || response.status == 201) {
                const data = response.data;
                const vaultName = data.vaultName.substring(0, data.vaultName.indexOf('.'));
                resolve([
                    {
                        identifier: vaultName,
                        name: vaultName,
                        type: "file",
                        size: data.vaultData.length
                    }
                ]);
            }
        })
            .catch(error => {
            console.log("Error: " + error.message);
            if (error.response.status == 404) {
                resolve([]);
            }
            reject("Error Occured: " + String(error));
        });
    });
}
