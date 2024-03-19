import { Component, Input } from '@angular/core';
import { Product } from '../../interface/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-green-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './green-sale.component.html',
  styleUrl: './green-sale.component.scss'
})
export class GreenSaleComponent {

  @Input() products!: any[];

}
