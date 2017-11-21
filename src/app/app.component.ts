import { Component } from '@angular/core';
import { InitialComponent } from './initial/initial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [InitialComponent]
})
export class AppComponent {
  title = 'app';
}
