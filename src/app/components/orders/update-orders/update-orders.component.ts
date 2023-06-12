import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-orders',
  templateUrl: './update-orders.component.html',
  styleUrls: ['./update-orders.component.css']
})
export class UpdateOrdersComponent implements OnInit {

  updation: boolean = false;
  loader: boolean = false;

  @Input()
  public orderInfo:any;
  
  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeModel.emit();
  }

}
