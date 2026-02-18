import { Component, Input, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-dropdown',
  imports: [CommonModule],
  templateUrl: './sidebar-dropdown.component.html',
})
export class SidebarDropdownComponent implements OnInit {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() prefix!: string;

  private router = inject(Router);
  isExpanded: boolean = false;
  isActive: boolean = false;

  ngOnInit(): void {
    // Check initial state
    this.checkActiveState();

    // Subscribe to route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkActiveState();
      });
  }

  private checkActiveState(): void {
    if (this.prefix) {
      this.isActive = this.router.url.startsWith(this.prefix);
      // Auto expand ketika active
      if (this.isActive && !this.isExpanded) {
        this.isExpanded = true;
      }
    }
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }
}
