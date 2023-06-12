import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  //updation: boolean = false;
  userForm: FormGroup = new FormGroup({});
  userBool: boolean = true;
  loader : boolean = false;
  errResponse: any;

  @Input()
  public userInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: NgbModal, private fb:FormBuilder, private userService:UsersService) { }

  ngOnInit(): void {
    if(this.userInfo) {
      this.initialForm(this.userInfo);
    } else{
      this.initialForm();
    }
  }
  initialForm(userObj: any = null) {
    if (userObj === null) {
      this.userForm = this.fb.group({
        fullName: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        userId: [null],
        city: [null],
        state: [null],
        active: [true],
        addedOn: [],
        contact: [],
      });
    } else {
      this.userForm = this.fb.group({
        fullName: [userObj.fullName, Validators.required],
        email: [userObj.email, Validators.required],
        password: [userObj.password, Validators.required],
        userId: [userObj.userId],
        active: [userObj.active],
        city: [userObj.city],
        state: [userObj.state],
        contact: [userObj.contact],
      });
    }
  }

  initialiseUserModal(userObj: any=null) {
    if (userObj === null) {
      this.userForm = this.fb.group({
        fullName: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        userId: [null],
        city: [null],
        state: [null],
        active: [true],
        addedOn: [],
        contact: [],
      });
    } else {
      this.userForm = this.fb.group({
        fullName: [userObj.fullName, Validators.required],
        email: [userObj.email, Validators.required],
        password: [userObj.password, Validators.required],
        userId: [userObj.userId],
        active: [userObj.active],
        city: [userObj.city],
        state: [userObj.state],
        contact: [userObj.contact],
      });
      }
    } 

    close() {
      this.closeModel.emit();
    }



}
