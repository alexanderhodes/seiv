import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "ns-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {

    isOpen: boolean = false;

    constructor(private router: Router) {}

    toggleOpen(): void {
        this.router.navigate([this.isOpen ? '' : 'menu'], { skipLocationChange: true }).then();
        this.isOpen = !this.isOpen;
    }

}
