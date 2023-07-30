import { compileDeclareInjectorFromMetadata } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild("search") search: any

  ngAfterViewInit(): void {
    fromEvent(this.search.nativeElement, 'keyup').pipe(
      debounceTime(500)
    ).subscribe(
      (data: any) => {
        this.onSearch(data.target.value, data.code)
      }
    )
  }

  constructor(private productservice: ProductService) { }


  ngOnInit(): void {
  }
  isPresent:boolean=false;
  suggests!: Product[];
  input: string = "";
  //products!: Product[];

  onSearch(search: string, key: string) {
    if (key === "Enter" && search != "") {
      this.isPresent=true;
      console.log("search for " + search);
      this.productservice.getSearch(search).subscribe(
        (data: any) => {
          this.suggests = data;
        },
      );
    }
    else if (search != "") {
      this.isPresent=true;
      console.log("suggest for " + search)
      this.productservice.getSearch(search).subscribe(
        (data: any) => {
          this.suggests = data;
        },
      );
      //console.log(this.suggests)
    }
  }


}
