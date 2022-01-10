import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  allItems: string[] = [];
  item: string = '';
  itemChanging: number = -1;
  submitItem: string = '';
  addItem() {
    this.allItems.push(this.item);
    this.item = '';
  }
  deleteItem(index: number) {
    this.allItems.splice(index, 1);
  }
  changingItem(index: number) {
    this.itemChanging = index;
    this.submitItem = this.allItems[index];

  }
  changeItem(index: number) {
    this.allItems[index] = this.submitItem;
    this.itemChanging = -1;
  }
}
