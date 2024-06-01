import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

  utilities: any[] = [
    {
      title: 'cambiar extensión archivos',
      action: 'change-file-extension'
    }
  ]

}
