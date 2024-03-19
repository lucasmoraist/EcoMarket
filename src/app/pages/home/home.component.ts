import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { GreenSaleComponent } from '../../components/green-sale/green-sale.component';
import { BestRatedComponent } from '../../components/best-rated/best-rated.component';
import { CategoryComponent } from '../../components/category/category.component';
import { CuponsComponent } from '../../components/cupons/cupons.component';
import { Product } from '../../interface/Product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent, 
    GreenSaleComponent, 
    BestRatedComponent,
    CategoryComponent,
    CuponsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  listDiscount:Product[] = [
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

  bestRated:Product[] = [
    {
      id: 1,
      name: "Kit 12 Canudos de Bambu",
      discount: 59.99,
      price: 78.90,
      img: "assets/produtos/cafe.png"
    },
    {
      id: 2,
      name: "Ecobag",
      discount: 19.99,
      price: 29.99,
      img: "assets/produtos/castanha.png"
    },
    {
      id: 3,
      name: "Esponja Orgânica",
      discount: 7.49,
      price: 9.99,
      img: "assets/produtos/sabonete-liquido.png"
    },
    {
      id: 4,
      name: "Lâmpada de Led",
      discount: 15,
      price: 19.93,
      img: "assets/produtos/suco-po.png"
    }
  ]

}
