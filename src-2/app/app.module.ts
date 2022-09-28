import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CalcComponent } from './Components/calc/calc.component';
import { MasterComponent } from './Components/master/master.component';
import { SearchPipe } from './Pipes/search.pipe';
import { EmpDetailComponent } from './Components/emp-detail/emp-detail.component';
import { AddEmpComponent } from './Components/add-emp/add-emp.component';
import { EmpMgrComponent } from './Components/emp-mgr/emp-mgr.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AddNewEmpComponent } from './Components/add-new-emp/add-new-emp.component';
import { ViewEmpComponent } from './Components/view-emp/view-emp.component';
import { EditEmpComponent } from './Components/edit-emp/edit-emp.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';


const routes : Routes =[
  {path: '', redirectTo: "Home", pathMatch:'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Employees/All', component: EmpMgrComponent},
  {path: 'Employees/Add', component: AddNewEmpComponent},
  {path: 'Employees/Edit/:id', component: EditEmpComponent},
  {path: 'Employees/View/:id', component: ViewEmpComponent},
  {path: 'Calc', component: CalcComponent},  
  {path: 'Master', component: MasterComponent}  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalcComponent,
    MasterComponent,
    SearchPipe,
    EmpDetailComponent,
    AddEmpComponent,
    EmpMgrComponent,
    NavBarComponent,
    AddNewEmpComponent,
    ViewEmpComponent,
    EditEmpComponent,
    SpinnerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
