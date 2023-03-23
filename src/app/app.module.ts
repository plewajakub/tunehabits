import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LastTracksComponentComponent } from './components/last-tracks-component/last-tracks-component.component';
import { TopThingsComponentComponent } from './components/top-things-component/top-things-component.component';
import { TitleComponentComponent } from './components/title-component/title-component.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LastTracksComponentComponent,
    TopThingsComponentComponent,
    TitleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
