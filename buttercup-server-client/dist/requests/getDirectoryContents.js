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
                resolve([
                    {
                        identifier: data.vaultName + ".bcup",
                        name: data.vaultName + ".bcup",
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
