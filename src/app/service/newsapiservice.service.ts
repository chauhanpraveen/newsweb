import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {
  // take news Api url leep in variable//


  constructor(private _http: HttpClient) { }
  // NewsApiUrl//
  newsApiurl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=8beb332507f5416394a232c8eedef8f2";

  // TechnologyApiUrl//
  techapiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=8beb332507f5416394a232c8eedef8f2";

  // BusinessApiUrl//
  businessApiurl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8beb332507f5416394a232c8eedef8f2";


  // topHeading ka method banya//
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiurl);
  }
  // method//
  techNews(): Observable<any> {
    return this._http.get(this.techapiUrl);
  }
  // method//
  businessNews(): Observable<any> {
    return this._http.get(this.businessApiurl);
  }





}
