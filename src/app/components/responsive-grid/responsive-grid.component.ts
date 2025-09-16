import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GridItem { title: string; body: string; }

@Component({
  selector: 'app-responsive-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './responsive-grid.component.html',
  styleUrls: ['./responsive-grid.component.css']
})
export class ResponsiveGridComponent {
  @Input() items: GridItem[] = [];
}
