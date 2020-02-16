import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TemplateDrivenFormComponent } from "./template-driven-form.component";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [TemplateDrivenFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports: [TemplateDrivenFormComponent],
  providers: [],
  bootstrap: []
})
export class TemplateDrivenFormModule {}
