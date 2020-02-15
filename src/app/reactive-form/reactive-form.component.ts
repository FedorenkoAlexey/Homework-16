import { Component, OnInit, InjectionToken } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.html",
  styleUrls: ["./reactive-form.css"]
})
export class ReactiveFormComponent implements OnInit {
  MAT_INPUT_VALUE_ACCESSOR: InjectionToken<{ value: any }>;
  // constructor(private fb: FormBuilder) {}
  reactiveForm: FormGroup;

  // reactiveForm = this.fb.group({
  //   userName: [],
  //   firstName: [],
  //   lastName: [],
  //   email: []
  // });

  onSubmit() {
    console.warn(this.reactiveForm.value);
  }

  ngOnInit() {
    // this.firstNameControl = new FormControl();
    // this.firstNameControl.valueChanges.subscribe(() =>
    //   console.log(this.firstNameControl)
    // );

    // this.reactiveForm = new FormGroup({
    //   userName: new FormControl("user"),
    //   firstName: new FormControl("F-N"),
    //   lastName: new FormControl("L-N")
    // });

    this.reactiveForm = new FormGroup({
      user: new FormGroup({
        userName: new FormControl("user"),
        firstName: new FormControl("F-N"),
        lastName: new FormControl("L-N")
      }),
      email: new FormControl(""),
      pass: new FormGroup({
        password: new FormControl(""),
        repeatPass: new FormControl("")
      })
    });
  }
}
