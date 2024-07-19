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
  text = 'Milan';
  hotels: Hotel[] = [];
  constructor(private http: HttpClient) {
    this.searchHotels(this.text);
  }
  searchHotels(textToFind: string) {
    this.text = textToFind;
    console.log(textToFind);
    this.http
      .get<Hotel[]>('http://localhost:3000/hotels?q=' + textToFind)
      .subscribe((result) => {
        this.hotels = result;
      });
  }
}
