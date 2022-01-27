import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  searchName: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(
      (message) => (this.searchName = message)
    );
  }
  getValue(value: string) {
    this.dataService.setMessage(value);
  }
}
