import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {CustomerService} from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    //providers: [CustomerService]
})

export class CustomersComponent implements OnInit {

    customers: Observable<any[]>;


    constructor(private _customerService: CustomerService) {
    }

    ngOnInit() {
        this.customers = this._customerService.getCustomers()
        .catch((err) => {
            console.log(err);
            return Observable.of(true);
            //now we eat it, but only if it has been communicated to the user
        });
    }
}