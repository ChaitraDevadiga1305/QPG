import { Component } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
  card1header: string = 'Add Questions'
  card2header: string = 'Manually Create Question Paper'
  card1content: string = 'Import the questions and create your Question Paper in just few steps.'
  card2content: string = 'Build, edit and format each questions as per your requirements.'
}
