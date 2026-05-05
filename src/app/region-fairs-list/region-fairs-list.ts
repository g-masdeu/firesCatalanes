import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FairDetailComponent } from '../fair-detail/fair-detail';

@Component({
  selector: 'app-region-fairs-list',
  standalone: true,
  imports: [CommonModule, FairDetailComponent],
  templateUrl: './region-fairs-list.html',
  styleUrl: './region-fairs-list.css'
})
export class RegionFairsListComponent implements OnInit {
  @Input() fairs: any[] = [];
  favorites: string[] = [];
  selectedFair: any = null;

  ngOnInit() {
    this.carregarFavs();
  }
  openModal(fair: any) {
    this.selectedFair = fair;
  }

  closeModal() {
    this.selectedFair = null;
  }
  carregarFavs() {
    const saved = localStorage.getItem('favorites');
    this.favorites = saved ? JSON.parse(saved) : [];
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
