import { Component } from '@angular/core';
import { WikipediaService } from './Services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data:any = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response:any) => {
      console.log(response)
      this.data = response.query.search;
    });
  }
}
