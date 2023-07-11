import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MouserOverDirective } from '../mouser-over.directive';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [MouserOverDirective, CommonModule],
})
export class CardComponent implements OnInit {
  @Input() obj!: {
    id: number;
    title: string;
    description: string;
  };

  constructor(private _renderer: Renderer2) {}

  ngOnInit() {}

  @ViewChild('cardBody')
  cardBodyEle!: ElementRef;

  onHeaderClick(value: HTMLDivElement) {
    if (value.className.includes('d-none')) {
      value.classList.remove('d-none');
    } else {
      value.classList.add('d-none');
    }
  }
}
