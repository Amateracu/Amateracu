import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public color = false;
  public hiding = true;
  public title = 'todo';
  public allItems: string[] = [];
  public item: string = '';
  public itemChanging: number = -1;
  public submitItem: string = '';
  public colorButton: any;
  public addItem() {
    this.allItems.push(this.item);
    this.item = '';
  }

  public deleteItem(index: number) {
    if(this.itemChanging === index) {
      this.itemChanging = -1;
    }
    this.allItems.splice(index, 1);

  }

  public changingItem(index: number) {
    this.itemChanging = index;
    this.submitItem = this.allItems[index];

  }

  public changeItem(index: number) {
    this.allItems[index] = this.submitItem;
    this.itemChanging = -1;
  }

  public selectColor() {
    this.color = !this.color;
  }

  public hideItem() {
    this.hiding =!this.hiding;
  }

}
