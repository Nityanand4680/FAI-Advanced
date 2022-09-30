import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ContactMgrComponent } from './Components/contact-mgr/contact-mgr.component';
import { ViewContactComponent } from './Components/view-contact/view-contact.component';
import { AddNewContactComponent } from './Components/add-new-contact/add-new-contact.component';
import { EditContactComponent } from './Components/edit-contact/edit-contact.component';
import { SearchPipe } from './Pipes/search.pipe';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactMgrComponent,
    ViewContactComponent,
    AddNewContactComponent,
    EditContactComponent,
    SearchPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
