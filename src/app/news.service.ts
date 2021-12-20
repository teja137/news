import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: any;
onRequest(value){
  this.news=value;
}
  constructor(private http: HttpClient) { }
  getNews(){
    return this.http.get<any>(`https://newsapi.org/v2/everything?q=${this.news}&from=2021-11-20&sortBy=publishedAt&apiKey=eb5be3ed2e024432b6e4c91da6fb7aae`)
  }
}