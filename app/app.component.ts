import { Component } from '@angular/core';

//This is a barrel - index is just a convention
import {CustomersComponent, CustomerService} from './customer/index';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    title = 'Customer App';
    name = 'Leo';
    leoColor = 'blue';

    changeColor() {
        this.leoColor = this.leoColor === 'blue' ? 'red' : 'blue';
    }
 }
