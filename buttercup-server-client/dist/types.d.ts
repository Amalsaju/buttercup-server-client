export declare type Identifier = string | number;
export interface PathIdentifier {
    identifier: Identifier;
    name: string;
}
export interface FileIdentifier {
    identifier: Identifier | null;
    name: string;
}
export interface FileItem {
    identifier: Identifier;
    name: string;
    type: "file" | "directory";
    size: number;
    mime?: string;
    created?: string;
    modified?: string;
    parent?: PathIdentifier;
}
