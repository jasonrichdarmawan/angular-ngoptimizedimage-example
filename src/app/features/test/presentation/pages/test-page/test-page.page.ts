import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './test-page.page.html',
  styleUrls: ['./test-page.page.scss']
})
export class TestPagePage implements OnInit {
  picSumImageLoaded: boolean;

  constructor() {
    this.picSumImageLoaded = false;
  }

  ngOnInit(): void {
  }

}
