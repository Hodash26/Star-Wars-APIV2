import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { MovieSelectComponentComponent } from './movie-select-component/movie-select-component.component';
import { MovieDetailsComponentComponent } from './movie-details-component/movie-details-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieCharactersComponentComponent } from './movie-characters-component/movie-characters-component.component'

@NgModule({
  declarations: [
    AppComponent,
    MovieSelectComponentComponent,
    MovieDetailsComponentComponent,
    MovieCharactersComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
