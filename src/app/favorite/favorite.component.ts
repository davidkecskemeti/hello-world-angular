import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;
  @Input('is-favorite') isSelected: boolean;

  @Output('change') click = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.isSelected = !this.isSelected;

    this.click.emit({newValue: this.isSelected});
  }
}

export interface FavoriteChangeArgs {
  newValue: boolean;
}
