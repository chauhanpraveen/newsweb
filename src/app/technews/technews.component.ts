import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  tecNewsDisplay: any = [];

  constructor(private _service: NewsapiserviceService) { }

  ngOnInit(): void {

    this._service.techNews().subscribe(res => {
      console.log(res);
      this.tecNewsDisplay = res.articles;
    })
  }

}
