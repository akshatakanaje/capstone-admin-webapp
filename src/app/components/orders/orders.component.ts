import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public ordersList:any[] = [];
  public orderInfo:any;

  orderStatusIdx: number = 0;
  orderStatus: { name: string; value: number }[] = [
    { name: 'Placed', value: 0 },
    { name: 'Accepted', value: 1 },
    { name: 'Delivered', value: 2 },
    { name: 'Cancelled', value: 3 },
  ];
  viewOrderBool: boolean = false;
  viewOrderIdx: number | undefined;
  orderModel: any;   
  
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
  }

  // openModal(modelRef:any, orderObj = null) {
  //   this.modalService.open(modelRef, { size: "xl" });
  //   this.orderInfo = orderObj;
  // }

}
