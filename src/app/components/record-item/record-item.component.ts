import { Component, Input, OnInit } from '@angular/core';
import { Record } from '../../Record';

@Component({
  selector: 'app-record-item',
  standalone: true,
  imports: [],
  templateUrl: './record-item.component.html',
  styleUrl: './record-item.component.css'
})
export class RecordItemComponent implements OnInit {
  @Input() record!: Record;
  // @Input() discount!: Record;
  constructor() {}

  ngOnInit(): void {
    // 
  }
}
