import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-fairs-list',
  standalone: true,
  templateUrl: './region-fairs-list.html',
  styleUrl: './region-fairs-list.css'
})
export class RegionFairsListComponent implements OnInit {
  @Input() fairs: any[] = [];
  favorites: string[] = [];

  ngOnInit() {
    this.carregarFavs();
  }

  carregarFavs() {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  toggleFavorite(id: string) {
    const idx = this.favorites.indexOf(id);
    if (idx > -1) {
      this.favorites.splice(idx, 1);
    } else {
      this.favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFav(id: string) {
    return this.favorites.includes(id);
  }
}