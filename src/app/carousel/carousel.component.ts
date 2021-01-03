import {Component, Input, OnInit} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {ICarouselItem} from './ICarouselItem';
import {Carouselitem} from '../models/Carouselitem';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  images = [70, 53, 80, 12].map((n) => `https://picsum.photos/id/${n}/1378/500`);
  @Input() height = 500;
  @Input() isFullScreen = true;
  @Input() items: ICarouselItem[] = [];
  public carouselItem: Carouselitem ;
  public finalHeight: string | number = 0;
  public currentPos = 0;
  constructor(config: NgbCarouselConfig) {
    // this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px` ;
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.items.map((i , index) => {
      i.id = index;
      i.marginLeft = 0;
    } );

  }

  setCurrentPos(position: number): void{
    this.currentPos = position;
    this.items.find(i => i.id === 0).marginLeft = -100 * position;
  }
  setNext(): void {
    let finalpercentage = 0;
    let nextposition = this.currentPos + 1;
    if (nextposition <= this.items.length - 1){
      finalpercentage = -100 * nextposition;
    }else{
      nextposition = 0;
    }
    this.items.find(i => i.id === 0).marginLeft = finalpercentage;
    this.currentPos = nextposition;
  }

  setBack(): void {
    let finalpercentage = 0;
    let nextposition = this.currentPos - 1;
    if (nextposition >= 0){
      finalpercentage = -100 * nextposition;
    }else{
      nextposition = this.items.length - 1;
    }
    this.items.find(i => i.id === 0).marginLeft = finalpercentage;
    this.currentPos = nextposition;
  }

}

