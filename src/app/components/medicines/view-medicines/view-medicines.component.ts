import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-medicines',
  templateUrl: './view-medicines.component.html',
  styleUrls: ['./view-medicines.component.css']
})
export class ViewMedicinesComponent implements OnInit {

  @Input()
  public medicineInfo:any;


  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeModel.emit();
  }
}
