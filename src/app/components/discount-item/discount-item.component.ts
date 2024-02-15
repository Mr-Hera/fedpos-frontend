import { Component, Input, OnInit } from '@angular/core';
import { Discount } from '../../Discount';

@Component({
  selector: 'app-discount-item',
  standalone: true,
  imports: [],
  templateUrl: './discount-item.component.html',
  styleUrl: './discount-item.component.css'
})
export class DiscountItemComponent implements OnInit {
  @Input() discount!: Discount;
  constructor() {}

  ngOnInit(): void {
    // 
  }

}
