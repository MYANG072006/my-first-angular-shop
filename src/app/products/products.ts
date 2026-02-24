import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {

  // Cart counter and total (Bonus)
  cartCount: number = 0;
  cartTotal: number = 0;

  // Category filter (Bonus)
  selectedCategory: string = 'All';
  categories: string[] = ['All', 'Skincare', 'Makeup', 'Treatment'];

  // Product list with availability, category, image (Bonus)
  products = [
    {
      name: 'Matte Lipstick',
      price: 299,
      available: true,
      category: 'Makeup',
      color: '#f9d5e5',
      label: 'LIPS'
    },
    {
      name: 'Hydrating Serum',
      price: 699,
      available: true,
      category: 'Skincare',
      color: '#d5eaf9',
      label: 'SKIN'
    },
    {
      name: 'Aloe Face Wash',
      price: 249,
      available: false,
      category: 'Skincare',
      color: '#e8f9d5',
      label: 'WASH'
    },
    {
      name: 'Glow Highlighter',
      price: 399,
      available: true,
      category: 'Makeup',
      color: '#f9f0d5',
      label: 'GLOW'
    },
    {
      name: 'Toning Moisturizer',
      price: 549,
      available: false,
      category: 'Skincare',
      color: '#f9d5d5',
      label: 'MOIST'
    },
    {
      name: 'Clay Face Mask',
      price: 199,
      available: true,
      category: 'Treatment',
      color: '#e5d5f9',
      label: 'MASK'
    },
    {
      name: 'Rose Toner',
      price: 349,
      available: true,
      category: 'Skincare',
      color: '#fde8f0',
      label: 'TONE'
    },
    {
      name: 'BB Cream SPF30',
      price: 459,
      available: true,
      category: 'Makeup',
      color: '#f5f0e8',
      label: 'BB'
    },
  ];

  // Filtered list based on selected category
  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  // Category filter function (Bonus)
  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  // Add to cart with alert, counter, and total (Bonus)
  addToCart(product: any) {
    this.cartCount++;
    this.cartTotal += product.price;
    alert(product.name + ' added to cart!');
  }
}