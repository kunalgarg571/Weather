import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  option: String
  constructor() { this.option = "5-Day Weather ForeCast" }

  ngOnInit() {
  }
  onClickMe(he: String) {
    this.option = he
  }

}
