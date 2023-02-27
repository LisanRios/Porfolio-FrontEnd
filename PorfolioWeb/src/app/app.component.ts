import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porfolioweb';
}
  let previousTitle = document.title;

  window.addEventListener('blur', () => {
    previousTitle = document.title;
    document.title = ' Porfolio web || ¡No te vayas! :(';
  })
  window.addEventListener('focus', () => {
    document.title = previousTitle;
  })

