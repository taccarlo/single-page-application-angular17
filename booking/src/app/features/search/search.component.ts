import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Hotel } from '../../model/hotel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  /*
  problems: second click on button does not change array
  jsonserver error: query does not work 
  */
  text = 'milan';
  hotels: Hotel[] = [];
  active?: Hotel;

  constructor(private http: HttpClient) {
    this.searchHotels(this.text);
  }
  searchHotels(textToFind: string) {
    this.text = textToFind;
    console.log(textToFind);
    const url = 'http://localhost:3000/hotels?city=' + textToFind;
    this.http.get<Hotel[]>(url).subscribe((result) => {
      this.hotels = result;
    });
    this.active = this.hotels[0];
  }
  setActive(hotel: Hotel) {
    this.active = hotel;
  }
}
