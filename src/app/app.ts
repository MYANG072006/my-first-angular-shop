import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from './products/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Products],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'GlowUp Beauty Shop';
}