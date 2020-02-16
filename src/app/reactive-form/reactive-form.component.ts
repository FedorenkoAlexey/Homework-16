import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { regions } from "../regions-data";
import { Region } from "../regions";
import { MustMatch } from "./validation/confirm-pass";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.html",
  styleUrls: ["./reactive-form.css"]
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  reactiveForm: FormGroup;

  regions: Region[] = [
    { id: 1, name: "Kyiv" },
    { id: 2, name: "Khyrkov" },
    { id: 3, name: "Cherkasy" },
    { id: 4, name: "Other" }
  ];

  get control() {
    return this.reactiveForm.controls;
  }
  get passChild() {
    return this.reactiveForm.controls.pass;
  }

  get User() {
    return this.reactiveForm.controls.user;
  }

  onSubmit() {
    console.warn(this.reactiveForm.value);
    this.reactiveForm.reset("");
  }

  consol() {
    console.warn(this.reactiveForm.controls.pass);
  }

  ngOnInit() {
    this.reactiveForm = this.fb.group(
      {
        user: this.fb.group({
          userName: [
            "",
            [Validators.required, Validators.pattern("^[0-9a-zA-Z]*$")]
          ],
          firstName: [
            "",
            [Validators.required, Validators.pattern("^[0-9a-zA-Z]*$")]
          ],
          lastName: [
            "",
            [Validators.required, Validators.pattern("^[0-9a-zA-Z]*$")]
          ]
        }),
        email: ["", Validators.required],
        pass: this.fb.group({
          password: ["", Validators.minLength(10)],
          repeatPass: ["", Validators.required]
        }),
        sex: [""],
        region: ["", Validators.required],
        sendEmail: [""]
      },
      {
        validators: MustMatch
      }
    );
  }
}
