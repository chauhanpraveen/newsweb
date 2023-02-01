import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {
  businessnewsDisplay: any = [];

  constructor(private _service: NewsapiserviceService) { }

  ngOnInit(): void {
    this._service.businessNews().subscribe(res => {
      console.log(res);
      this.businessnewsDisplay = res.articles;
    })
  }

}
