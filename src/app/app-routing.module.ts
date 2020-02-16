import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "react", component: ReactiveFormComponent },
  { path: "driven", component: TemplateDrivenFormComponent },
  { path: "", redirectTo: "/driven", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
