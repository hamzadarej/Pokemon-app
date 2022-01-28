import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
loader:boolean=false;
  constructor(private dataService: DataService) {
    this.dataService.loader.subscribe(response=>{
    this.loader=response;
  }) }
  

  ngOnInit(): void {
  }

}
