import { Component } from '@angular/core';
import { CustomerService } from './customer/customer.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [CustomerService]
})
export class AppComponent {
    title = 'Customer App';
    name = 'Leo';
    leoColor = 'blue';

    changeColor() {
        this.leoColor = this.leoColor === 'blue' ? 'red' : 'blue';
    }
 }
