import { isUndefined } from "util";
import { getDirectoryContents } from "./requests/getDirectoryContents.js";
import { getFileContents } from "./requests/getFileContents.js";
import { putFileContents } from "./requests/putFileContents.js";
export class ButtercupServerClient {
    constructor(path, token) {
        if (isUndefined(token)) {
            throw new Error("Token is undefined");
        }
        else {
            console.log("Token: ", token);
        }
        this.uuid = this.getUID(token);
        this.url = path.identifier.toString();
    }
    getUID(jwt) {
        return JSON.parse(atob(this.base64UrlToBase64(jwt))).uid;
    }
    base64UrlToBase64(base64Url) {
        if (base64Url === null || base64Url === undefined)
            return;
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        while (base64.length % 4) {
            base64 += '=';
        }
        return base64;
    }
    async getDirectoryContent(pathIdentifier) {
        return getDirectoryContents({
            databaseURL: this.url,
            databaseUUID: this.uuid,
            pathIdentifier
        });
    }
    async getFileContents(pathIdentifier) {
        return getFileContents({
            databaseURL: this.url,
            databaseUUID: this.uuid,
            pathIdentifier
        });
    }
    async putFileContents(fileIdentifier, encryptedData) {
        console.log("Buttercupclient client.ts check");
        return putFileContents({
            databaseURL: this.url,
            databaseUUID: this.uuid,
            encryptedData,
            fileIdentifier
        });
    }
}
