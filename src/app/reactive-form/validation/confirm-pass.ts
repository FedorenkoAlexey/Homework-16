import { FormGroup } from "@angular/forms";

export function MustMatch(group: FormGroup) {
  let pass = group.controls.pass.get("password");
  let repeatPass = group.controls.pass.get("repeatPass");

  if (pass.dirty && repeatPass.dirty) {
    if (pass.value !== repeatPass.value) {
      repeatPass.setErrors({ incorrect: true });
      console.log("pass: ", pass);
    } else {
      repeatPass.setErrors(null);
    }
  }
}
