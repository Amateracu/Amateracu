import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  color = false;
  title = 'todo';
  allItems: string[] = [];
  item: string = '';
  itemChanging: number = -1;
  submitItem: string = '';
  colorButton: any;
  addItem() {
    this.allItems.push(this.item);
    this.item = '';
  }
  deleteItem(index: number) {
    if(this.itemChanging === index) {
      this.itemChanging = -1;
    }
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
  selectColor() {
    this.color = !this.color

  }
}
