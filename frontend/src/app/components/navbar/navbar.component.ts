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
  suggests!: Product[];
  wayfairSuggests!: Wayfair[];
  input: string = '';
  searchKey: string = '';

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
        this.suggests = data;
        // console.log('suggestss:' + data);
      });

      this.wayfairService.getSearch(search).subscribe((data: any) => {
        this.wayfairSuggests = data;
      })
      

      //console.log(this.suggests)
    }
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
