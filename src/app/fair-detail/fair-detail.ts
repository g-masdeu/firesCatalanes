import { Component, Input, Output, EventEmitter } from '@angular/core'; // IMPORTANTE: es @angular/core
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fair-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fair-detail.html',
  styleUrl: './fair-detail.css'
})
export class FairDetailComponent {
  @Input() fair: any; // Recibe la feria seleccionada
  @Output() onClose = new EventEmitter<void>(); // Avisa al padre para cerrar

  close() {
    this.onClose.emit();
  }
}