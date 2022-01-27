import { Component, OnInit,EventEmitter ,Output, Input} from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  searchName:string="";
  

constructor(private dataService: DataService,private router: Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    
    this.dataService.currentMessage.subscribe(
      (message) => (this.searchName = message)
    );
    
  }
  newMessage(value:string){
    this.dataService.setMessage(value);
    this.router.routeReuseStrategy.shouldReuseRoute =()=>false;
    this.router.onSameUrlNavigation="reload";
    this.router.navigate(['/'],{relativeTo:this.route});
  }
 /* public search(value:string){
    this.emmitSearch.emit(value);
  }
*/
}
