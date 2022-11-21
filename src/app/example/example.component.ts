import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  datas: { userId: number, id: number, title: string, body: string }[];

  ngOnInit(): void {
    this.httpClient.get<{ userId: number, id: number, title: string, body: string }[]>("https://jsonplaceholder.typicode.com/posts").subscribe((datas) => this.datas = datas);
  }

}
