import { Component, OnInit } from '@angular/core';
import { DestinationService } from './services/destination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'projetajs';
    
  destinations: any[];

  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
    this.destinations = this.destinationService.destinations;
  }


  good_opinion() {
    alert('Merci pour votre appréciation.');
  }
  bad_opinion() {
    alert('Merci pour votre réponse, nous en tiendrons compte dans nos prochaines publications.');
  }
}