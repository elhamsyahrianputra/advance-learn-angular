import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-dropdown-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-dropdown-item.component.html',
})
export class SidebarDropdownItemComponent {
  @Input() label!: string;
  @Input() href!: string;
  @Input() exact: boolean = false;
}
