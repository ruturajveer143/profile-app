import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  address!: string; // Use '!' to indicate it will be initialized

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the address parameter from the route
    this.route.params.subscribe((params) => {
      this.address = params['address'];

      // Use the address to display the map or perform map-related operations
      // You can integrate Google Maps here.
    });
  }
}
