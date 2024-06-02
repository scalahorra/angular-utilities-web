import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GenericModalComponent } from '@components/generic-modal/generic-modal.component';
import { Actions } from '@shared/enums';
import { Utility } from '@shared/models/utility';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GenericModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  isModalOpen: boolean = false;

  homeUtilities: Utility[] = [
    { title: 'Cambiar extensión archivos', action: Actions.REPLACE_EXTENSION }
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  clickUtility(action: string) {
    switch(action) {
      case Actions.REPLACE_EXTENSION:
        this.changeFileExtension();
        break;
    }
  }

  private changeFileExtension() {
    this.openModal();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
