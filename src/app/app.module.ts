import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Redux implementation
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
//Reducers
import { sampleData } from './reducers/sample.reducer';

import { AppComponent } from './app.component';

import { SampleService } from './services/sample.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ 
      //place for reducers
      sampleData
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    SampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
