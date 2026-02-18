import { Component } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SidebarWrapperComponent } from './sidebar-wrapper/sidebar-wrapper.component';
import { SidebarSectionComponent } from './sidebar-section/sidebar-section.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { SidebarDropdownComponent } from './sidebar-dropdown/sidebar-dropdown.component';
import { SidebarDropdownItemComponent } from './sidebar-dropdown-item/sidebar-dropdown-item.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    SimplebarAngularModule,
    SidebarWrapperComponent,
    SidebarSectionComponent,
    SidebarItemComponent,
    SidebarDropdownComponent,
    SidebarDropdownItemComponent,
  ],
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {}
