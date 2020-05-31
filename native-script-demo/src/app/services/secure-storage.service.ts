import {Injectable} from "@angular/core";
import { SecureStorage } from "nativescript-secure-storage";

export const SECURE_STORAGE_KEY_NAME = 'name';

@Injectable({ providedIn: "root" })
export class SecureStorageService {



    private secureStorage: SecureStorage;

    constructor() {
        this.secureStorage = new SecureStorage();
    }

    getValue(key: string) {
        return this.secureStorage.getSync({ key: key });
    }

    setValue(key: string, value: string) {
        this.secureStorage.set({ key: key, value: value });
    }


}
