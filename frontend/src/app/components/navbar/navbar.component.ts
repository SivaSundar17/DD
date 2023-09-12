import { compileDeclareInjectorFromMetadata } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { Wayfair } from 'src/app/model/Wayfair';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { WayfairService } from 'src/app/services/wayfair.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('search') search: any;

  ngAfterViewInit(): void {
    fromEvent(this.search.nativeElement, 'keyup')
      .pipe(debounceTime(500))
      .subscribe((data: any) => {
        this.onSearch(data.target.value, data.code);
      });
  }

  optionsMenu: boolean = false;

  constructor(private productservice: ProductService, private wayfairService: WayfairService) { }

  ngOnInit(): void { }
  isPresent: boolean = false;
  suggests: Product[]=[];
  wayfairSuggests: Wayfair[]=[];
  input: string = '';
  searchKey: string = '';
  bestMatches!: (Product | Wayfair)[];

  onSearch(search: string, key: string) {
    if (key === 'Enter' && search != '') {
      this.isPresent = true;
      console.log('search for ' + search);
      this.productservice.getSearch(search).subscribe((data: any) => {
        this.suggests = data;
      });
    } else if (search != '') {
      this.isPresent = true;
      // console.log('suggest for ' + search);
      this.productservice.getSearch(search).subscribe((data: any) => {
        console.log("1");
        this.suggests = data;
        // console.log('suggestss:' + data);
      });

      this.wayfairService.getSearch(search).subscribe((data: any) => {
        console.log('2');
        this.wayfairSuggests = data;
      })
      console.log("done")

       if (this.suggests.length > 0 && this.wayfairSuggests.length > 0) {
        this.bestMatches = this.searchBestMatches(search, this.suggests, this.wayfairSuggests);
       }
    }
  }

  

  searchBestMatches(
    query: string,
    list1: Product[] = [],
    list2: Wayfair[] = []
  ): (Product | Wayfair)[] {

    if (!list1 || !Array.isArray(list1) || list1.length === 0) {
      list1 = [];
    }

    if (!list2 || !Array.isArray(list2) || list2.length === 0) {
      list2 = [];
    }

    const matchesInList1 = list1
      .filter((item) => item.Name.toLowerCase().includes(query.toLowerCase()))
      .map((item) => ({ ...item, score: this.calculateScore(query, item.Name) }));

    const matchesInList2 = list2
      .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
      .map((item) => ({ ...item, score: this.calculateScore(query, item.title) }));

    const allMatches = [...matchesInList1, ...matchesInList2];
    allMatches.sort((a, b) => b.score - a.score);

    return allMatches;
  }

  calculateScore(query: string, text: string): number {
    // You can implement your own scoring logic here.
    // For example, you can assign higher scores for exact matches or other criteria.
    return text.toLowerCase() === query.toLowerCase() ? 100 : 0; // Example: Exact match gets a score of 100.
  }

  addSearchKey(key: any) {
    localStorage.setItem('key', key + '');
    location.href = '/searchResults';
  }

  addcId(cId: string) {
    localStorage.setItem('cId', cId);
    location.href = '/prodDetails';
  }

  clickedOut() {
    this.isPresent = false;
  }

  dontShowOptions() {
    this.optionsMenu = false;
  }
  showOptions() {
    this.optionsMenu = !this.optionsMenu;
  }
}
