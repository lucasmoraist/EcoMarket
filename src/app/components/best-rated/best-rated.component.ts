import { Component, Input } from '@angular/core';
import { Product } from '../../interface/Product';
import { CommonModule } from '@angular/common';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-best-rated',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './best-rated.component.html',
  styleUrl: './best-rated.component.scss'
})
export class BestRatedComponent {

  faStar = faStar

  @Input() products!: any[];

}
