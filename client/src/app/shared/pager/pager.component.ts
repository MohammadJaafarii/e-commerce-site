import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  standalone: false,
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.scss'
})
export class PagerComponent {
  @Input() totalCount?: number;
  @Input() pageSize?: number;
  @Output() pageChanged = new EventEmitter<number>();

  onPagerChanged(event: any) {
    this.pageChanged.emit(event.page);
  }
}
