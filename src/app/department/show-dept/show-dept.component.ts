import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  constructor() { }

  listData : MatTableDataSource<any>;
  displayedColumns : string[] = ['options', 'DepartmentID', 'DepartmentName']

  ngOnInit() {
  }

}
