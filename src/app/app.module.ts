import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponentModule } from 'projects/navigation/src/public-api';
import { InMemoryContextStorageModule } from 'projects/team/src/lib/adapters/secondary/infrastructure/in-memory-context.storage-module';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavComponentModule,
    AngularFireModule.initializeApp(environment.firestoreConfig),
    InMemoryContextStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
