import { Component } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-index',
  imports: [SimplebarAngularModule, SidebarComponent],
  templateUrl: './index.component.html',
  styles: ``,
})
export class IndexComponent {}
