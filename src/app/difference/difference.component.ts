import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {
 number = 0;

  constructor(private _dataService: DataService) { }

  ngOnInit() {  
  }

  pushResult(){
    this.number = this._dataService.result();
  }

}
