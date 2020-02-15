import { Component, OnInit, InjectionToken } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.html",
  styleUrls: ["./reactive-form.css"]
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  reactiveForm: FormGroup;
  regions: Array<any> = [
    { id: 1, name: "Kyiv" },
    { id: 2, name: "Khyrkov" },
    { id: 3, name: "Cherkasy" },
    { id: 4, name: "Other" }
  ];

  onSubmit() {
    const controls = this.reactiveForm.controls;
    console.warn(this.reactiveForm.value, controls);
  }

  ngOnInit() {
    // this.firstNameControl = new FormControl();
    // this.firstNameControl.valueChanges.subscribe(() =>
    //   console.log(this.firstNameControl)
    // );

    this.reactiveForm = this.fb.group({
      user: this.fb.group({
        userName: ["", Validators.required],
        firstName: [""],
        lastName: [""]
      }),
      email: [""],
      pass: this.fb.group({
        password: ["", Validators.minLength(10)],
        repeatPass: [""]
      }),
      sex: [""],
      region: [""],
      sendEmail: [""]
    });
  }
}
