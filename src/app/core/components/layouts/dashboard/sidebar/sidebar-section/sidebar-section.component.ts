import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar-section',
  imports: [],
  templateUrl: './sidebar-section.component.html',
  styles: ``,
})
export class SidebarSectionComponent {
  @Input() label: string = '';

  isExpanded: boolean = true;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
