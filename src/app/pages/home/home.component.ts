import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { GreenSaleComponent } from '../../components/green-sale/green-sale.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, GreenSaleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
