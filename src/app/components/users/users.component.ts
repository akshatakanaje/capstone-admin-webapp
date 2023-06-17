import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public usersList:any[]=[];
  public userInfo:any;

  constructor(private usersService: UsersService, private modalService: NgbModal) { }

  ngOnInit(): void {
    // this.usersService.getAll().subscribe((response:any)=>{
    //   this.usersList = response; 
    // })
    this.getAllUser();
  }

  openModal(modelRef:any, userObj = null) {
    this.modalService.open(modelRef, { size: "l" });
    this.userInfo = userObj;
  }

  openViewModal(modelRef:any, userObj = null) {
    this.modalService.open(modelRef, { size: "l" });
    this.userInfo = userObj;
  }

  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }

  getAllUser() {
    this.usersService.getAll().subscribe((response:any ) => { //response is nothing but user data
      this.usersList = response;  
      console.log(response);
    });
  }

  deleteUser(userId:any) {
    this.usersService.delete(userId).subscribe((response:any ) => {
      this.getAllUser();
    });
  }

}
