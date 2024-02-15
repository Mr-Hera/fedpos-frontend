import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewRecord } from '../../NewRecord';


@Component({
  selector: 'app-add-record',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-record.component.html',
  styleUrl: './add-record.component.css'
})
export class AddRecordComponent implements OnInit {
  @Output() onAddRecord: EventEmitter<NewRecord> = new EventEmitter();

  name!: string;
  unit!: string;
  description!: string;
  category_name!: string;
  sales_count!: number;
  price!: number;
  vat!: string;
  discount!: string;

  constructor() {}

  ngOnInit(): void {
    // 
  }

  onSubmit() {
    const newRecord = {
      name: this.name,
      unit: this.unit,
      description: this.description,
      category_name: this.category_name,
      sales_count: this.sales_count,
      price: this.price,
      vat: this.vat,
      discount: this.discount,
    };

    this.onAddRecord.emit(newRecord);

    this.name = "";
    this.unit = "";
    this.description = "";
    this.category_name = "";
    this.sales_count = 0;
    this.price = 0;
    this.vat = "";
    this.discount = "";
  }
}
