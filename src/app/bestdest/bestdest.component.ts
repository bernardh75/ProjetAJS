import { Component, OnInit, Input } from '@angular/core';
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-bestdest',
  templateUrl: './bestdest.component.html',
  styleUrls: ['./bestdest.component.scss']
})
export class BestdestComponent implements OnInit {

  @Input() destinationName: string;
  @Input() destinationNote: string;
  @Input() index: number;
    
  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
  }
}
