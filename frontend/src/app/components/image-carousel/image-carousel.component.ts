import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Hammer from 'hammerjs';
import { BestProductsService } from 'src/app/best-products.service';
import { BestProducts } from 'src/app/model/BestProducts';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent implements OnInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  bestProducts: BestProducts | undefined;
  images!: any[];
  constructor(private bestProductsService: BestProductsService) {
    this.bestProducts = bestProductsService.getProductById(
      localStorage.getItem('id')
    );
    this.images = [
      this.bestProducts?.image1,
      this.bestProducts?.image2,
      this.bestProducts?.image3,
      this.bestProducts?.image4,
      this.bestProducts?.image5,
      this.bestProducts?.image6,
    ];
  }

  ngOnInit(): void {}

  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  ngAfterViewInit() {
    const hammer = new Hammer(this.carousel.nativeElement);
    hammer.on('swipeleft', () => this.nextImage());
    hammer.on('swiperight', () => this.prevImage());
  }
}
