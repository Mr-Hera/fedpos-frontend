import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordService } from '../../services/record.service';
import { Record } from '../../Record';
import { Vat } from '../../Vat';
import { RecordItemComponent } from '../record-item/record-item.component';
import { VatItemComponent } from '../vat-item/vat-item.component';
import { DiscountItemComponent } from '../discount-item/discount-item.component';
import { AddRecordComponent } from '../add-record/add-record.component';
import { Discount } from '../../Discount';

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [CommonModule, RecordItemComponent, VatItemComponent, DiscountItemComponent, AddRecordComponent],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent implements OnInit{
  records: Record[] = [];
  vats: Vat[] = [];
  discounts: Discount[] = [];
  
  constructor(private recordService: RecordService) {}

  ngOnInit(): void {
    this.recordService.getRecords().subscribe((records) => this.records = records);
    this.recordService.getVats().subscribe((vats) => this.vats = vats);
    this.recordService.getDiscounts().subscribe((discount) => this.discounts = discount);
  }

  addRecord(record: Record) {
    console.log(record);
  }
}
