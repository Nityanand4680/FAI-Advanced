import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewContactComponent } from './Components/add-new-contact/add-new-contact.component';
import { ContactMgrComponent } from './Components/contact-mgr/contact-mgr.component';
import { EditContactComponent } from './Components/edit-contact/edit-contact.component';
import { HomeComponent } from './Components/home/home.component';
import { ViewContactComponent } from './Components/view-contact/view-contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'All', component: ContactMgrComponent},
  {path: 'AddNew', component: AddNewContactComponent},
  {path: 'View/:id', component: ViewContactComponent},
  {path: 'Edit/:id', component: EditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
