import { Component, Input, OnInit } from '@angular/core';
import { Vat } from '../../Vat';

@Component({
  selector: 'app-vat-item',
  standalone: true,
  imports: [],
  templateUrl: './vat-item.component.html',
  styleUrl: './vat-item.component.css'
})
export class VatItemComponent implements OnInit {
  @Input() val!: Vat;

  constructor() {}

  ngOnInit(): void {
    // 
  }
}
