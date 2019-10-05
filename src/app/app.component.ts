import {Component, ViewEncapsulation} from '@angular/core';
import {FavoriteChangeArgs} from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'FORLoop Angular App lets learn this framework';

  post = {
    favoriteTitle: 'Title',
    isFavorite: false,
    isSelected: true
  };

  onFavoriteChange(eventArgs: FavoriteChangeArgs) {
    console.log('Favorite change:' + eventArgs);
  }
}

