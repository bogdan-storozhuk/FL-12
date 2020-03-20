import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  search = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSearchChange(search: string) {
    this.search = search;
  }
}
