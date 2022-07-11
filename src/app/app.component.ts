import { AfterViewInit, Component } from '@angular/core';
import { AirportService } from './../modules/airport/services/airport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Tech Challenge';
  selectedAirport: any;
  airports: any;
  selectedAirportSIDTopWaypoints: any;
  selectedAirportSTARTopWaypoints: any;

  sidPanelOpenState = true;
  starPanelOpenState = true;

  constructor(private airportSerivce: AirportService) {
  }

  async ngAfterViewInit(): Promise<void> {
    this.airports = await this.airportSerivce.getAirports();
  }

  async selectAirportChange() {
    if (!this.selectedAirport) {
      return;
    }
    this._clear();

    this.selectedAirportSIDTopWaypoints = await this.airportSerivce.getSIDTopWaypoints(this.selectedAirport.icao);
    this.selectedAirportSTARTopWaypoints = await this.airportSerivce.getSTARTopWaypoints(this.selectedAirport.icao);
  }

  private _clear() {
    this.selectedAirportSIDTopWaypoints = null;
    this.selectedAirportSTARTopWaypoints = null;
  }
}
