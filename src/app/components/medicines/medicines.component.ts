import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicinesService } from 'src/app/services/medicines.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  public medicineList:any[] = [];
  public medicineInfo:any;

  public selectedImageIdx: number = 0;
  public thumbnailImageIdx: number = 0;
  public tempImageFiles: any[] = [];
  
  constructor(private medicinesService: MedicinesService, private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.medicinesService.getAll().subscribe((response:any)=>{
      this.medicineList=response;
    })
  }

  openModal(modelRef:any, medicineObj = null) {
    this.modalService.open(modelRef, { size: "xl" });
    this.medicineInfo = medicineObj;
  }

  openViewModal(modelRef:any, medicineObj = null) {
    this.modalService.open(modelRef, { size: "l" });
    this.medicineInfo = medicineObj;
  }

  // view image model
openImageModal(modal: any, imageUrls: string[], thumbnailImageIdx: number) {
  this.tempImageFiles = [...imageUrls];
  this.thumbnailImageIdx = thumbnailImageIdx;
  this.modalService.open(modal, { 
    size: "xl",
    scrollable: true 
  });
}

// open image
openImage(url: string) {
  window.open(url, "_blank")
}

closeModel(modelRef:any) {
this.modalService.dismissAll(modelRef);
}
}

