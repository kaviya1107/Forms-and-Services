import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  contactform=new FormGroup({
    firstname:new FormControl('Kavi'), //default value
    lastname:new FormControl({
      value:'Kavin',
      disabled: true //cant able to edit in view
    }),
    email:new FormControl(),
    gender:new FormControl(),
    country:new FormControl(),
    address:new FormGroup({ //nested formgroup
      city:new FormControl(),
      pincode:new FormControl(),
      street:new FormControl(),
    })
  })
  onsubmit(){
    console.log(this.contactform.value);
}
}