import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-fancy-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fancy-accordion.component.html',
  styleUrls: ['./fancy-accordion.component.css']
})
export class FancyAccordionComponent {
  @Input() items: AccordionItem[] = [];
  @Input() openId: string | null = null; // controlled state for deterministic snapshots

  toggle(id: string) {
    this.openId = this.openId === id ? null : id;
  }
}
