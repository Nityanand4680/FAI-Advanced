import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html'
})
export class CalcComponent{

  firstValue : number = 0.0;
  secondValue : number = 0.0;
  resultValue : number = 0.0;
  operand : string = "";
  constructor() { }

  operate(){
    switch(this.operand){
      case "Add" : this.resultValue = this.firstValue + this.secondValue; break;
      case "Subtract" : this.resultValue = this.firstValue - this.secondValue; break;
      case "Multiply" : this.resultValue = this.firstValue * this.secondValue; break;
      case "Divide" : this.resultValue = this.firstValue / this.secondValue; break;
    }  
  }
}
