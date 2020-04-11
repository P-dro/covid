import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UuidService {

    constructor() { }

    uuidv4(): string {
        return 'unAFkcaNDeXajurGB7LChj8SgQYS2ptm';
        /* return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }); */
    };

}