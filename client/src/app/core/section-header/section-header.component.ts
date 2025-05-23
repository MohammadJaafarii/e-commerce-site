import { Component } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  standalone: false,
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  
  constructor(public bcService: BreadcrumbService) {
    
  }
}
