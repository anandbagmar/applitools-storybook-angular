import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {
  @Input() open = false; // controlled via Story args for deterministic rendering
  @Input() title = 'Modal Title';
  @Output() closed = new EventEmitter<void>();

  close() { this.closed.emit(); }
}
