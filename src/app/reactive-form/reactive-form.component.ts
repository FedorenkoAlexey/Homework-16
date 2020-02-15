import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.html",
  styleUrls: ["./reactive-form.css"]
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}
  firstNameControl: FormControl;

  ngOnInit() {
    this.firstNameControl = new FormControl();
  }
}
