import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-destination-view',
  templateUrl: './destination-view.component.html',
  styleUrls: ['./destination-view.component.scss']
})
export class DestinationViewComponent implements OnInit {

  destinations: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
    this.destinations = this.destinationService.destinations;
  }

}
