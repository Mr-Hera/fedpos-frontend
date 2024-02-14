import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Record } from '../../Record';
import { RECORDS } from '../../mock-records';
import { RecordItemComponent } from '../record-item/record-item.component';

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [CommonModule, RecordItemComponent],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent implements OnInit{
  records: Record[] = RECORDS;
  
  constructor() {}

  ngOnInit(): void {
    // 
  }
}
