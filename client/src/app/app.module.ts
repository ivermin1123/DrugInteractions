import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { BtnCellRenderer } from './components/btn-cell-renderer/btn-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FeedbackComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SingupComponent,
    BtnCellRenderer,
  ],
  imports: [
    AgGridModule.withComponents([BtnCellRenderer]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [NgbModule],
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
