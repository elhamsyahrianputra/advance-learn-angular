import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-index',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './index.component.html',
})
export class IndexComponent {

}
