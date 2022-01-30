import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  userInput: string = '';
  selectedValue: string = 'default';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(
      (message) => (this.userInput = message)
    );
    this.dataService.defaultMode.subscribe((mode) => (this.selectedValue = mode));
  }
  
  getSelectedValue(value:string) {
    this.dataService.setMode(value);
  }
  getValue(value: string) {
    this.dataService.setMessage(value.toLowerCase().trim());
  }
}
