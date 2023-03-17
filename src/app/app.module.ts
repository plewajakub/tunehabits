import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LastTracksComponentComponent } from './components/last-tracks-component/last-tracks-component.component';
import { TopThingsComponentComponent } from './components/top-things-component/top-things-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LastTracksComponentComponent,
    TopThingsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
