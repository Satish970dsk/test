import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  standalone: false,
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {

  product = {
    name: 'iPhone 15',
    price: 1299.99,
    releaseDate: new Date(2024, 8, 15)
  };
  searchTerm = ''
  users = ['Alice', 'Bob', 'Charlie', 'David']
}
