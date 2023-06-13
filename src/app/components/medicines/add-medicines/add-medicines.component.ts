import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-medicines',
  templateUrl: './add-medicines.component.html',
  styleUrls: ['./add-medicines.component.css']
})
export class AddMedicinesComponent implements OnInit {

  medicineForm: FormGroup = new FormGroup({});
  medicineModel: Medicines | undefined;
  selectedImageIdx: number = 0;
  thumbnailImageIdx: number = 0;
  tempImageFiles: any[] = [];
  updation: boolean = false;
  loader: boolean = false; 

  @Input()
  public medicineInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: NgbModal, private fb:FormBuilder) { }

  ngOnInit(): void {  
  if(this.medicineInfo) {
    this.initialiseMedicineModal(this.medicineInfo);
  }else{
    this.initialiseMedicineModal();
  }
}

initialiseMedicineModal(medicineObj: any = null) {
  if (medicineObj == null) {
    this.updation = false;
    this.medicineForm = this.fb.group({
      medicineId: [],
      medicineName: [null],
      brandName: [null],
      form: [null],
      images: this.fb.array([]),
      thumbnailImage: [null],
      productMeasurementUnit: [null],

      active: [true],
      addedOn: [],
      rating: [0]
    });
  } else {
    this.updation = true;
    this.medicineForm = this.fb.group({
      medicineId: [medicineObj.productId],
      medicineName: [medicineObj.productName],
      brandName: [medicineObj.brandName],
      form: [medicineObj.form],
      images: [medicineObj.images],
      thumbnailImage: [medicineObj.thumbnailImage],
      medicineMeasurementUnit: [medicineObj.productMeasurementUnit],
      active: [medicineObj.active],
      addedOn: [medicineObj.addedOn],
      rating: [medicineObj.rating]
    });
  }
}
close() {
  this.closeModel.emit();
}
// open image
openImage(url: string) {
  window.open(url, "_blank")
}

removeImage(idx: number) {
  this.tempImageFiles.splice(idx, 1);
}

changeThumbnailImageIdx(idx: number) {
  this.medicineForm.patchValue({
    thumbnailImage: idx
  })
}
checkImageFileType(event: any) {
  let fileList: File[] = Object.assign([], event.target.files);
  fileList.forEach((file: any, idx: number) => {
    if (
      file.type == "image/png" ||
      file.type == "image/jpeg" ||
      file.type == "image/jpg"
    ) {
      this.tempImageFiles.push(file);
    } else {
      // this.toast.warning("Only .png/.jpeg/.jpg file format accepted!!", file.name + " will not accepted.");
    }
  });
}
}


export interface Medicines {
  medicineId?: string;
  medicineTitle?: string;
  medicineCode?: string;
  medicineDescription?: string;
  price?: number;
  images?: string[];
  thumbnailImage?: number;
  active?: boolean;
  addedOn?: Date;
  rating?: number;
}


