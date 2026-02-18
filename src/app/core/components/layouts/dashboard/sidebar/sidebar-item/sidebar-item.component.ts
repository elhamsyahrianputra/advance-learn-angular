import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() href!: string;
  @Input() exact: boolean = false;
}
