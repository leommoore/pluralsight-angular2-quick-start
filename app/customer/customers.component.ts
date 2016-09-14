import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {CustomerService} from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html'
})

export class CustomersComponent implements OnInit {

    //customers: Observable<any[]>;
    //customers: Promise<any[]>;
    customers: any[];

    constructor(private _customerService: CustomerService) {
    }

    ngOnInit() {

        this._customerService.getCustomers_RxObservable()
            .subscribe(
                //It worked
                (customers) => this.customers = customers,
                //Error
                (err) => { console.log(err);});


        //Straight up promise to array
        //this._customerService.getCustomers()
        //.then((customers) => this.customers = customers)
        //.catch((err) => {
        //    console.log(err);
        //    return Observable.of(true);
        //now we eat it, but only if it has been communicated to the user
        //});

        //Promise version
        //this.customers = this._customerService.getCustomers()
        //.catch((err) => {
        //    console.log(err);
        //    return Observable.of(true);
        //now we eat it, but only if it has been communicated to the user
        //});

        //Rx Observable version
        //this.customers = this._customerService.getCustomers_RxObservable()
        //.catch((err) => {
        //    console.log(err);
        //    return Observable.of(true);
        //now we eat it, but only if it has been communicated to the user
        //});
    }
}