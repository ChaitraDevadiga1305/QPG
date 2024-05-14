import { Component } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent {
  source: string = '../assets/images/main content.jpg'
  slogan: string = 'Easy way to Generate Question Paper.'
}
