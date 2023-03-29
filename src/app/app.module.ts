import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LastTracksComponentComponent } from './components/last-tracks-component/last-tracks-component.component';
import { TopThingsComponentComponent } from './components/top-things-component/top-things-component.component';
import { TitleComponentComponent } from './components/title-component/title-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import { ChartComponent } from './components/chart/chart.component';
import { CallbackComponent } from './components/callback/callback.component';



@NgModule({
  declarations: [
    AppComponent,
    LastTracksComponentComponent,
    TopThingsComponentComponent,
    TitleComponentComponent,
    ChartComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
