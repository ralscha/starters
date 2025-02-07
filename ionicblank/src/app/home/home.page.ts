import {Component} from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrl: 'home.page.css',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {
  }
}
