import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  isEditable = true;
  firstFormGroup = this._formBuilder.group({
    firstnameCtrl: ['', Validators.required],
    lastnameCtrl: ['', Validators.required],
    dobCtrl: ['', Validators.required],
    genderCtrl: ['', Validators.required],
    emailidCtrl: ['', Validators.required],
    contnoCtrl: ['', Validators.required],
    addressCtrl: ['', Validators.required],
    stateCtrl: ['', Validators.required],
    countryCtrl: ['', Validators.required],
    pincodeCtrl: ['', Validators.required],
    altnoCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    empidCtrl: ['', Validators.required],
    dojCtrl: ['', Validators.required],
    emptypeCtrl: ['', Validators.required],
    departmentCtrl: ['', Validators.required],
    designationCtrl: ['', Validators.required],
    levelCtrl: ['', Validators.required],
    bandCtrl: ['', Validators.required],
    reportingmanagerCtrl: ['', Validators.required],
    locationCtrl: ['', Validators.required],
    workexpondojCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    var empDetails = this.getEmpDetailsByEmail(sessionStorage.getItem('username'));
    console.log('S   ',empDetails);
    var control = 'firstnameCtrl';
    if (this.firstFormGroup.controls[control].value)
      this.firstFormGroup.controls[control].disable();
  }
  submit() {
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
  }
  getEmpDetailsByEmail(email: any) {
    var testData = {
      fname: 'sri',
      lname: 'velicharla',
      email:'srikanth@indiumsoft.com'
    }
    return testData;
  }

}
