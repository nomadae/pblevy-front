import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {

  constructor() { }
  numbers = Array(10).fill(1);

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); // third parameter

  }
  scroll = (event): void => {
    let elem = event.target ;
    console.log(elem.children[0].scrollTop);
  }
}

