import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FAIRS } from '../model/fairs';
import { RegionFairsListComponent } from '../region-fairs-list/region-fairs-list';

@Component({
  selector: 'app-regions-list',
  standalone: true,
  imports: [CommonModule, RegionFairsListComponent],
  templateUrl: './regions-list.html',
  styleUrl: './regions-list.css'
})
export class RegionsListComponent implements OnInit {
  tipus: string = '';
  options: string[] = [];
  filteredFairs: any[] = [];
  titolPagina: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.tipus = data['tipus'];
      this.configurarDashboard();
    });
  }

  configurarDashboard() {
    if (this.tipus === 'comarca') {
      this.titolPagina = "Cerca per Comarca";
      this.options = [...new Set(FAIRS.map((f: any) => f.regionName))].sort();
    } else if (this.tipus === 'poblacio') {
      this.titolPagina = "Cerca per Localitat";
      this.options = [...new Set(FAIRS.map((f: any) => f.municipalityName))].sort();
    } else if (this.tipus === 'preferides') {
      this.titolPagina = "Les teves preferides";
      this.carregarPreferides();
    }
  }

  carregarPreferides() {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.filteredFairs = FAIRS.filter((f: any) => favs.includes(f.activityId));
  }

  onFilterChange(event: any) {
    const val = event.target.value;
    if (this.tipus === 'comarca') {
      this.filteredFairs = FAIRS.filter((f: any) => f.regionName === val);
    } else if (this.tipus === 'poblacio') {
      this.filteredFairs = FAIRS.filter((f: any) => f.municipalityName === val);
    }
  }

onDateChange(event: any) {
  const dataSeleccionada = event.target.value; // Ejemplo: "2024-05-15"
  
  if (!dataSeleccionada) {
    this.filteredFairs = [];
    return;
  }
  const mesDiaSeleccionat = dataSeleccionada.substring(5);

  this.filteredFairs = FAIRS.filter((f: any) => {
    const mesDiaFira = f.iniDate.substring(5, 10);
    
    return mesDiaFira === mesDiaSeleccionat;
  });
}
}
