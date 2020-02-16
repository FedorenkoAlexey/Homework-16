import { Component, OnInit } from "@angular/core";
import { USER } from "../users";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.html",
  styleUrls: ["./template-driven-form.css"]
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor() {}

  data: USER = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassw: "",
    region: "",
    sex: "",
    sendEmail: false
  };

  onSubmit() {
    console.log("2");
  }

  ngOnInit() {}
}
