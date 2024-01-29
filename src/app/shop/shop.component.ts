import { Component } from '@angular/core';

interface Item {
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  items: Item[] = [
    { name: 'Item 1', price: 1000, image: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV8ZW58MHx8MHx8fDA%3D', quantity: 0 },
    { name: 'Item 2', price: 2000, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ298ZW58MHx8MHx8fDA%3D', quantity: 0 },
    { name: 'Item 3', price: 3000, image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuYW5hfGVufDB8fDB8fHww', quantity: 0 }
  ];
  totalBill: number = 0;

  buyItem(item: Item) {
    const totalPrice = item.quantity ? item.quantity * item.price : 0;
    if (totalPrice > 10000 || (item.quantity ?? 0) > 5) {
      this.totalBill = totalPrice * 0.95; 
    } else {
      this.totalBill = totalPrice; 
    }
    item.quantity = 0;
  }
}
