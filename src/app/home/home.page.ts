import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = [
    {
      itemName: 'Coding',
      itemDueDate: '04/12/2024',
      itemPriority: 'high',
      itemCategory: 'work',
    },
    {
      itemName: 'Design',
      itemDueDate: '04/13/2024',
      itemPriority: 'low',
      itemCategory: 'work',
    },
    {
      itemName: 'Shopping',
      itemDueDate: '04/15/2024',
      itemPriority: 'middle',
      itemCategory: 'Personal',
    },
    {
      itemName: 'Workout',
      itemDueDate: '04/12/2024',
      itemPriority: 'high',
      itemCategory: 'Personal',
    },
  ];

  today: number = Date.now();

  constructor() {}
}
