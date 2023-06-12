import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {


  productForm: FormGroup = new FormGroup({});
  productModel: Products | undefined;
  selectedImageIdx: number = 0;
  thumbnailImageIdx: number = 0;
  tempImageFiles: any[] = [];
  updation: boolean = false;
  loader: boolean = false; 

  @Input()
  public productInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: NgbModal, private fb:FormBuilder) { }

  ngOnInit(): void {  
  if(this.productInfo) {
    this.initialiseProductModal(this.productInfo);
  }else{
    this.initialiseProductModal();
  }
}

initialiseProductModal(productObj: any = null) {
  if (productObj == null) {
    this.updation = false;
    this.productForm = this.fb.group({
      productId: [],
      productName: [null],
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
    this.productForm = this.fb.group({
      productId: [productObj.productId],
      productName: [productObj.productName],
      brandName: [productObj.brandName],
      form: [productObj.form],
      images: [productObj.images],
      thumbnailImage: [productObj.thumbnailImage],
      productMeasurementUnit: [productObj.productMeasurementUnit],
      active: [productObj.active],
      addedOn: [productObj.addedOn],
      rating: [productObj.rating]
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
  this.productForm.patchValue({
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


export interface Products {
  productId?: string;
  productTitle?: string;
  productCode?: string;
  productDescription?: string;
  price?: number;
  images?: string[];
  thumbnailImage?: number;
  active?: boolean;
  addedOn?: Date;
  rating?: number;
}



