import { isUndefined } from "util";
import { getDirectoryContents } from "./requests/getDirectoryContents.js";
import { getFileContents } from "./requests/getFileContents.js";
import { putFileContents } from "./requests/putFileContents.js";
import { FileIdentifier, FileItem, PathIdentifier } from "./types.js";

export class ButtercupServerClient {
    uuid: string;
    url: string;

    constructor(path: PathIdentifier, token: string) {
        if (isUndefined(token)) {
            throw new Error("Token is undefined");
        } else {
            console.log("Token: ", token);
        }

        this.uuid = this.getUID(token);
        this.url = path.identifier.toString();
    }

    getUID(jwt) {
        return this.hashString(jwt);
    }

    private hashString(input: string | null) {
        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    async getDirectoryContent(pathIdentifier?: PathIdentifier):
        Promise<Array<FileItem>> {
        return getDirectoryContents({
            databaseURL: this.url,
            databaseUUID: this.uuid,
            pathIdentifier
        });
    }

    async getFileContents(pathIdentifier?: PathIdentifier): Promise<string> {
        return getFileContents({
            databaseURL: this.url,
            databaseUUID: this.uuid,
            pathIdentifier 
        });
    }

    async putFileContents(fileIdentifier: string, encryptedData: string): Promise<string> {
        console.log("Buttercupclient client.ts check");
        return putFileContents({
            databaseURL: this.url,
            databaseUUID: this.uuid,
            encryptedData,
            fileIdentifier
        });
    }

}