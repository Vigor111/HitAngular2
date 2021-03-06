import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {
  activeTab: string;

  constructor() {}

  ngOnInit() {
    this.activeTab = 'simple';
  }

  displayActiveTab() {
    console.log(this.activeTab);
  }
}
