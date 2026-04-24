import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAIRS } from '../model/fairs';
import { RegionFairsListComponent } from '../region-fairs-list/region-fairs-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RegionFairsListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  firesProperes: any[] = [];

  ngOnInit() {
    this.filtrarFiresProperes();
  }

  filtrarFiresProperes() {
    const llistaDatesValides: string[] = [];
    
    for (let i = 0; i <= 10; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      
      const mm = (d.getMonth() + 1).toString().padStart(2, '0');
      const dd = d.getDate().toString().padStart(2, '0');
      
      llistaDatesValides.push(`${mm}-${dd}`);
    }

    this.firesProperes = FAIRS.filter((f: any) => {
      const fMMDD = f.iniDate.substring(5, 10); 
      return llistaDatesValides.includes(fMMDD);
    });

    this.firesProperes.sort((a, b) => {
      return a.iniDate.substring(5, 10).localeCompare(b.iniDate.substring(5, 10));
    });
  }
}