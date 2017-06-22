import { Component,  OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { SampleService } from './services/sample.service';
import { Observable, Subscription } from 'rxjs';
import { sampleModel } from './models/sample.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
// Redux based variables
sampleData: Observable<sampleModel>;
private subscription: Subscription;

  title = 'This **** aint easy!';
  viewModel: sampleModel = new sampleModel();

  constructor(private sampleService: SampleService) { 
    this.sampleData = sampleService.sampleData;
  }

  ngOnInit() {
    this.subscription = this.sampleData
    .subscribe(sampleData => {
        //Do something
        this.viewModel = sampleData;
    },
    error => {
      //Do something
    });
    this.sampleService.loadData();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  plusOne() {  
    this.sampleService.Increment();
  }

  minusOne(){
    this.sampleService.Decrement();
  }
}
