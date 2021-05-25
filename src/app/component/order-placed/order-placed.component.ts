import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor() { }

  ngOnInit(): void {
  }

}
