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
  firesSetmana: any[] = [];

  ngOnInit() {
    const hoy = new Date();
    const mesDiaHoy = hoy.toISOString().substring(5, 10); // Ejemplo: "04-24"

    this.firesSetmana = FAIRS.filter((f: any) => {
      const mesFira = f.iniDate.substring(5, 7); // Extrae el mes del JSON
      const mesActual = (hoy.getMonth() + 1).toString().padStart(2, '0');
      return mesFira === mesActual;
    });
  }
}