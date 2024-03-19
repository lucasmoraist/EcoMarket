import { Component } from '@angular/core';
import { Discount } from '../../interface/Discount';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cupons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cupons.component.html',
  styleUrl: './cupons.component.scss'
})
export class CuponsComponent {

  listCupons: Discount[] = [
    {
      value: 200,
      desc: "Compras acima de R$ 350",
      validate: "21 marc"
    },
    {
      value: 100,
      desc: "Compras acima de R$ 180",
      validate: "13 de marc"
    },
    {
      value: 50,
      desc: "Compras acima de R$ 150",
      validate: "18 de marc"
    },{
      value: 150,
      desc: "Compras acima de R$ 300",
      validate: "21 de mar"
    }
  ]

}
