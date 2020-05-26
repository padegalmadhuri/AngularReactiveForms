import { Component } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms';
  faEye = faEye;
  profileForm:FormGroup;
  countries={
    IN:{
      code:"IN",
    name:"India",
    states:{
      AP:{
        code:"AP",
        name:"Andhra Pradesh",
        cities:[{
          code:"VZ",
          name:"Vizag"
        },{
          code:"KN",
          name:"kurnool"
        }]
      },
      KL:{
        code:"KL",
        name:"kerala",
        cities:[{
          code:"PK",
          name:"Palkad"
        },{
          code:"KC",
          name:"Kochin"
        }]
      }
    }
    },
    US:{
      code:"US",
    name:"United States",
    states:{
      NY:{
        code:"NY",
        name:"New York",
        cities:[{
          code:"NYC",
          name:"New york City"
        },
        {
        code:"AL",
        name:"Allen"
      }]
      },
      NJ:{
        code:"NJ",
        name:"New Jersey",
        cities:[{
          code:"TR",
          name:"Trenton"
        },
      {
        code:"HD",
        name:"Hudson"
      }]
      }
    }
    }
  }
  // countryList=[];
  stateList=[];
  cityList=[];


  constructor(){
    this.profileForm = new FormGroup({
    'username': new FormControl('',Validators.required),
    'mail': new FormControl('',[Validators.required,Validators.email]),
    'pass':new FormControl('',[Validators.required,Validators.pattern('[ A-Za-z0-9_@./#&+-]*'),Validators.minLength(6)]),
    'confPass':new FormControl('',Validators.required),
    'phone': new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    'gender':new FormControl(''),
    'status':new FormControl(''),
    'country':new FormControl('',Validators.required),
    'state':new FormControl('',Validators.required),
    'city':new FormControl('',Validators.required),
    'favfood':new FormControl('',Validators.required),
    'favcolor':new FormControl('',Validators.required),
  });

  this.profileForm.get('country').valueChanges.subscribe((data)=>{
        this.stateList=Object.keys(this.countries[data].states).map((item)=>{
        return this.countries[data].states[item];
      });
      })
    this.profileForm.get('state').valueChanges.subscribe((data)=>{
      this.cityList=this.countries[this.profileForm.get('country').value]["states"][data]["cities"];
      })
  };
  countryList=Object.keys(this.countries);
  //console.log(this.stateList);
  //console.log(countryList);
dataSubmit(){
  console.log(this.profileForm.value);
  console.log(this.profileForm.valid);
}
}
