import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  countrylist:country[]=[
    new country(1,"India"),
    new country(2,"USA"),
    new country(3,"NithuKavi")
  ];
}
class country{
  id:number;
  name:string;
  constructor(id:number,name:string){
    this.id=id;
    this.name=name;
  }
}

