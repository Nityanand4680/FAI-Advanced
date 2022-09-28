import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Welcome to Components of Angular"
  developedBy: string ="Phaniraj"
  yearOfBuild : string = "2022";
  value1 : number = 123;
  value2 : number = 123;
  result : number = 0;
  constructor() { }
  display(){
    this.result = this.value1 + this.value2;
  }
  onClick = () => alert("Button was clicked");
  ngOnInit(): void {
  }

}
