import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-generic-modal',
  standalone: true,
  imports: [],
  templateUrl: './generic-modal.component.html',
  styleUrl: './generic-modal.component.scss'
})
export class GenericModalComponent {

  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.closeEvent.emit();
  }
}
