import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTextSource = new BehaviorSubject<string>('');
  currentSearchText = this.searchTextSource.asObservable();

  updateSearchText(text: string): void {
    this.searchTextSource.next(text);
  }
}
