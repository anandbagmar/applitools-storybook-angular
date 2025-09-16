import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-card.component.html',
  styleUrls: ['./skeleton-card.component.css']
})
export class SkeletonCardComponent {
  @Input() loading = true;
  @Input() title = 'Card Title';
  @Input() body = 'Body copy for card content. Snapshot-friendly text.';
}
