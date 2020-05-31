import {Component, OnInit} from "@angular/core";
import {SECURE_STORAGE_KEY_NAME, SecureStorageService} from "~/app/services/secure-storage.service";

@Component({
    selector: "ns-menu",
    templateUrl: "./menu.component.html"
})
export class MenuComponent implements OnInit {

    name: string;

    constructor(private secureStorageService: SecureStorageService) {
        this.name = '';
    }

    ngOnInit(): void {
        this.name = this.secureStorageService.getValue(SECURE_STORAGE_KEY_NAME);
    }

    saveName(): void {
        this.secureStorageService.setValue(SECURE_STORAGE_KEY_NAME, this.name);
    }
}
