import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TemplateDrivenFormComponent } from "./template-driven-form.component";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { TemplateDrivenFormRoutingModule } from "./template-driven-form.routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TemplateDrivenFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    TemplateDrivenFormRoutingModule
  ],
  exports: [TemplateDrivenFormComponent],
  providers: [],
  bootstrap: []
})
export class TemplateDrivenFormModule {}
