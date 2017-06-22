import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { sampleModel } from '../models/sample.model';
import { AppStore } from '../app.store';

@Injectable()
export class SampleService {
    // Redux based variables
    sampleData: Observable<sampleModel>; 

    constructor(private store: Store<AppStore>) 
    {
        this.sampleData = store.select( store => store.sampleData);
    }

    loadData() {
        var newData = new sampleModel();
        newData.message = "Hello redux World";
        newData.value = 1;

        this.store.dispatch({ type: 'init', payload: newData })

    //If you wanted to do an async call to your API, it would look like this
    // return this.http.get(this.ENDPOINT_URL)
    //                 .map((res: Response) => {
    //                     let body = res.json();
    //                     return body.data || {};
    //                 })
    //                 .map((payload: any[]) => {
    //                     return { type: 'ACTION_NAME', payload };
    //                 })
    //                 .subscribe((action) => {
    //                     this.store.dispatch(action);
    //                 });
    }

    Increment(){
        this.store.dispatch({type: 'plusOne'})
    }

    Decrement(){
        this.store.dispatch({type: 'minusOne'})
    }
}