import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  // 1. create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
  }
  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }
  setSeachtext(inputEl: HTMLInputElement) {
    this.searchText = inputEl.value;
    this.searchTextChanged.emit(inputEl.value);
  }
}
