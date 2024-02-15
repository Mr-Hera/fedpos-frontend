import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title: string = 'fedpos-frontend';

  constructor() {};

  ngOnInit(): void {
    // 
  }

  toggleAddRecord() {
    console.log('🚀 ~ Add Record Toggled ~ 🚀');
  }
}
