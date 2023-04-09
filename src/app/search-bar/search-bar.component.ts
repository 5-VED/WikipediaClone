import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WikipediaService } from '../Services/wikipedia.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term: string = '';

  constructor() {}

  ngOnInit(): void {}

  onInput(event: any) {
    const target = event.target as HTMLInputElement;
    this.term = target.value;
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
