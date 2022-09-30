import { Component, VERSION} from '@angular/core';

@Component({
  selector: 'app-root',//tag name of UR Component. 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Data and operations of UR Component.
  title = "My Final App on Angular";
  year = new Date().getFullYear();//Gets the Year component of UR System Date...
  rights = "@Phaniraj Inc-Powered By Angular-" + VERSION.major

  //Functions or operatins of UR Component:
  testFunc(){
    alert(this.title);
  }
}
