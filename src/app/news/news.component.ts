import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
value;
articles;
  constructor(private news: NewsService) { }

  ngOnInit(): void {
  }
sendToService(){
this.news.onRequest(this.value);
this.news.getNews().subscribe((res)=>{
  this.articles=res.articles;
  
  console.log(res);
  
  
  
})

}
}