import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  @ViewChild('search') searchTerm?: ElementRef; 
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = []
  shopParams = new ShopParams;
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'},
  ];

  totalCount = 0;


  constructor(
    private shopService: ShopService,
    private elementRef: ElementRef
  ){}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe({
      next: response => {
        this.products = response.data;
        this.shopParams.pageNumber = response.pageIndex;
        this.shopParams.pageSize = response.pageSize;
        this.totalCount = response.count;
        this.enhancedSmoothScrollToTop();
      },
      error: error => console.log(error)
    })
  }

  getBrands(){
    this.shopService.getBrands().subscribe({
      next: response => this.brands = [{id:0 , name: 'All'}, ...response],
      error: error => console.log(error)
    })
  }

  getTypes(){
    this.shopService.getTypes().subscribe({
      next: response => this.types = [{id:0 , name: 'All'}, ...response],
      error: error => console.log(error)
    })
  }

  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortSelected(event: any){
    this.shopParams.sort = event.target.value;
    this.getProducts();
  }

  private enhancedSmoothScrollToTop() {
    const startPosition = window.pageYOffset;
    const distance = startPosition;
    const duration = 200; // مدت زمان اسکرول (میلی‌ثانیه)
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentComplete = Math.min(progress / duration, 1);
      
      // انیمیشن سینوسی برای حرکت نرم‌تر
      const easeInOutCubic = percentComplete < 0.5 
        ? 4 * percentComplete ** 3 
        : 1 - Math.pow(-2 * percentComplete + 2, 3) / 2;
      
      window.scrollTo(0, startPosition * (1 - easeInOutCubic));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }

  onPageChanged(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }

  onSearch() {
    this.shopParams.search = this.searchTerm?.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onReset() {
    if (this.searchTerm) this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }
}