import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  address!: string; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
   
    this.route.params.subscribe((params) => {
      this.address = params['address'];

     
    });
  }
}
