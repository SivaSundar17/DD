import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  user: any;
  isOpen = false;
  constructor() {}

  ngOnInit(): void {}

  openModal(s:string) {
    this.isOpen = true;
    console.log('open Modal'+ s);
  }

  closeModal() {

    this.isOpen = false;
    console.log('close Modal');
  }
}
