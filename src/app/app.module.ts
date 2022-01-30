import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from "@angular/common/http";
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import {LoaderInterceptor} from './loader/loader-intercepter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PokemonListComponent,
    FooterComponent,
    LoaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: '', component: PokemonListComponent},
      {path: '**', component: NotFoundComponent},
    ])
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
