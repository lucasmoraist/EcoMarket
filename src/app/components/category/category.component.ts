import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categorias = [
    {
      name: "Vegetais",
      img: "assets/categorias/legumes-costafarms.png"
    },
    {
      name: "Necessidades diárias",
      img: "assets/categorias/pngegg (1) 1.png"
    },
    {
      name: "Bebida",
      img: "assets/categorias/bebida.png"
    },
    {
      name: "Mudas de árvores",
      img: "assets/categorias/muda.png"
    },
    {
      name: "Verde e Fresco",
      img: "assets/categorias/pngegg (1) 1 (3).png"
    },
    {
      name: "Pacotes de Refeições ",
      img: "assets/categorias/pngegg (1) 1 (2).png"
    },
    {
      name: "Fruta",
      img: "assets/categorias/pngegg (1) 1 (4).png"
    },
    {
      name: "Comida instantânea",
      img: "assets/categorias/pngegg (1) 1 (5).png"
    },
    {
      name: "Suprimentos de jardinagem",
      img: "assets/categorias/pngegg (1) 1 (6).png"
    },
    {
      name: "Carne Vegetariana",
      img: "assets/categorias/pngegg (1) 1 (7).png"
    },
    {
      name: "Especiarias de ervas",
      img: "assets/categorias/pngegg (1) 1 (8).png"
    },
    {
      name: "Outro",
      img: "assets/categorias/pngegg (1) 1 (1).png"
    },
  ]
}
