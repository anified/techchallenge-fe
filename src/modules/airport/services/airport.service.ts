import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private readonly baseUrl: string = environment.serviceBaseUrl;

  constructor(private http: HttpClient) { }

  public async getAirports(): Promise<any[]> {
    const resp = firstValueFrom(this.http.get<any[]>(this.baseUrl + "/airports"));

    return resp;
  }

  public async getSIDTopWaypoints(icao: string): Promise<any[]> {
    const resp = firstValueFrom(this.http.get<any[]>(this.baseUrl + "/getSIDTopWaypoints/" + icao));

    return resp;
  }

  public async getSTARTopWaypoints(icao: string): Promise<any[]> {
    const resp = firstValueFrom(this.http.get<any[]>(this.baseUrl + "/getSTARTopWaypoints/" + icao));

    return resp;
  }
}
