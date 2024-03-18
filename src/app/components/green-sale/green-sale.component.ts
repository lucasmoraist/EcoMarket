import { Component } from '@angular/core';
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

  listRow:Product[]=[
    {
      id: 1,
      name: "Kit 12 Canudos de Bambu",
      discount: 59.99,
      price: 78.90,
      img: "assets/produtos/canudo-bambu.jpeg"
    },
    {
      id: 2,
      name: "Ecobag",
      discount: 19.99,
      price: 29.99,
      img: "assets/produtos/ecobag.jpeg"
    },
    {
      id: 3,
      name: "Esponja Orgânica",
      discount: 7.49,
      price: 9.99,
      img: "assets/produtos/esponja.jpg"
    },
    {
      id: 4,
      name: "Lâmpada de Led",
      discount: 15,
      price: 19.93,
      img: "assets/produtos/lampada-led.jpeg"
    },
    {
      id: 5,
      name: "Sabonete Orgânico",
      discount: 35.99,
      price: 42,
      img: "assets/produtos/sabonete-organico.jpg"
    },
    {
      id: 6,
      name: "Açúcar Demerara",
      discount: 19.99,
      price: 27,
      img: "assets/produtos/acucar.jpg"
    },
    {
      id: 7,
      name: "Ketchup Orgânico",
      discount: 10.99,
      price: 12.99,
      img: "assets/produtos/ketchup.jpg"
    }
  ]

}
