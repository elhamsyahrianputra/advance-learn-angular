import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../core/components/ui/button/button.component";
import { InputComponent } from "../../../../core/components/ui/forms/input/input.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register-page',
  imports: [ButtonComponent, InputComponent, RouterLink],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

}
